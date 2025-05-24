"use client"

import { useState } from "react"
import { Search, RefreshCw, AlertTriangle, X, RotateCcw } from "lucide-react"
import styles from "./check.module.css"
import inputsCss from "../../Authentication/auth.module.css"
import { useFormik } from "formik"
import axios from "axios"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"

const CheckPlate = () => {
  const [result, setResult] = useState(null)
  const [checkData, setCheckData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const formatPlateNumber = (value) => {
    const cleaned = value.replace(/[^a-zA-Z0-9]/g, "")
    if (cleaned.length <= 3) {
      return cleaned.toUpperCase()
    } else {
      const letters = cleaned.substring(0, 3).toUpperCase()
      const numbers = cleaned.substring(3, 6)
      return `${letters}-${numbers}`
    }
  }

  const formikObj = useFormik({
    initialValues: {
      plateType: '',
      plateNum: '',
    },
    onSubmit: async (values) => {
      setIsLoading(true)
      setErrorMessage(null)

      try {
        const { data } = await axios.get("https://traffic-fake-data.vercel.app/vehiclesData")
        const match = data.find(item => item.plateNum === values.plateNum)

        if (match) {
          setCheckData(match)
          setResult({ type: match.violationType, date: match.violationDate })
        } else {
          setCheckData(null)
          setResult({
            type: "No recorded violations",
            date: new Date().toLocaleString().split(",")[0],
          })
        }
      } catch (error) {
        console.log("Error fetching data:", error)
        setErrorMessage("Something went wrong. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    },
    validate: (values) => {
      const errors = {}
      if (!values.plateType) {
        errors.plateType = "Plate type is required"
      }
      if (!values.plateNum) {
        errors.plateNum = "Plate number is required"
      } else if (!/^[A-Z]{3}-\d{3}$/i.test(values.plateNum)) {
        errors.plateNum = "Plate number must be in the format 'ABC-123'"
      }
      return errors
    },
  })

  const handlePlateNumberChange = (e) => {
    const formatted = formatPlateNumber(e.target.value)
    formikObj.setFieldValue("plateNum", formatted)
  }

  const resetForm = () => {
    formikObj.resetForm()
    setResult(null)
    setCheckData(null)
    setErrorMessage(null)
  }

  return (
    <div className={styles.container}>
      <form onSubmit={formikObj.handleSubmit} className={`${styles.card} ${inputsCss.form}`}>
        <div className={styles.heading}>
          <h1 className={styles.title}>Check Your Cars Violations</h1>
          <p className={styles.pargaraph}>
            Enter your cars license plate number to check if there are any traffic violations or fines registered
            against your vehicle.
          </p>
        </div>

        {/* Plate Type */}
        <div className={`${inputsCss.input_field} ${inputsCss.full_input}`}>
          <label>
            <p>
              Plate Type <span className={styles.required}>*</span>
            </p>
            {formikObj.touched.plateType && formikObj.errors.plateType && (
              <p className={styles.error_label}>* {formikObj.errors.plateType}</p>
            )}
          </label>
          <div className={styles.selectWrapper}>
            <select
              className={styles.select}
              value={formikObj.values.plateType}
              onChange={formikObj.handleChange}
              id="plateType"
            >
              <option className={styles.placeholder} value="" disabled>
                Select plate type
              </option>
              <option value="private">Private</option>
              <option value="commercial">Commercial</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="diplomatic">Diplomatic</option>
            </select>
          </div>
        </div>

        {/* Plate Number */}
        <div className={`${inputsCss.input_field} ${inputsCss.full_input}`}>
          <label>
            <p>
              Enter Plate Number <span className={styles.required}>*</span>
            </p>
            {formikObj.touched.plateNum && formikObj.errors.plateNum && (
              <p className={styles.error_label}>* {formikObj.errors.plateNum}</p>
            )}
          </label>
          <div className={styles.inputWrapper}>
            <input
              id="plateNum"
              type="text"
              placeholder="Enter plate number (ABC-123)"
              value={formikObj.values.plateNum}
              onChange={handlePlateNumberChange}
              maxLength={7}
              className={formikObj.values.plateNum ? styles.hasValue : ""}
            />
            {formikObj.values.plateNum && (
              <button
                type="button"
                className={styles.clearButton}
                onClick={() => formikObj.setFieldValue("plateNum", "")}
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className={styles.buttonGroup}>
          <button className={styles.checkButton} type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <RefreshCw className={styles.spinIcon} />
                Checking...
              </>
            ) : (
              <>
                <Search className={styles.searchIcon} />
                Check Status
              </>
            )}
          </button>

          {(result || errorMessage) && (
            <button type="button" className={styles.resetButton} onClick={resetForm}>
              <RotateCcw size={16} />
              Reset
            </button>
          )}
        </div>
      </form>

      {/* Error Message */}
      {errorMessage && (
        <div className={styles.errorCard}>
          <div className={styles.alertContent}>
            <AlertTriangle className={styles.alertIcon} />
            <div className={styles.alertText}>{errorMessage}</div>
          </div>
        </div>
      )}

      {/* Result */}
      {result && !errorMessage && (
        <div className={!checkData ? styles.resultSuccessCard : styles.resultCard}>
          <div className={styles.alertContent}>
            {checkData ? (
              <AlertTriangle className={styles.alertIcon} />
            ) : (
              <IoMdCheckmarkCircleOutline className={styles.successIcon} />
            )}
            <div className={!checkData ? styles.alertSuccessText : styles.alertText}>{result.type}</div>
          </div>
          <div className={styles.timestamp}>Last updated: {result.date}</div>
        </div>
      )}

      {/* Disclaimer */}
      <div className={styles.disclaimer}>
        <span className={styles.disclaimerIcon}>ⓘ</span>
        <p className={styles.disclaimerText}>
          Displayed information is for verification purposes only and does not replace official channels. For detailed
          information please visit your local traffic department.
        </p>
      </div>
    </div>
  )
}

export default CheckPlate
