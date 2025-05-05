import { useState } from "react"
import { Search, RefreshCw, AlertTriangle } from 'lucide-react'
import styles from "./check.module.css"
import { useFormik } from "formik"
import axios from "axios"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"

const CheckPlate = () => {

  // {https://traffic-fake-data-production.up.railway.app} => API URL
  // {vehiclesData} => API Endpoint

  const [result, setResult] = useState(null)
  const [checkData, setCheckData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const values = {
    plateType : '',
    plateNum : '',
  }

  const handleSubmit = async(values) => {

    setIsLoading(true)

    try {

      const {data} = await axios.get(`https://traffic-fake-data-production.up.railway.app/vehiclesData?plateNum=${values.plateNum}`);
      setCheckData(data[0]);
      setResult(
        data[0] ? {type: data[0].violationType, date: data[0].violationDate} 
        : {type: "No recorded violations", date: new Date().toLocaleString().split(",")[0]}
      );

    } catch (error) {

      console.log("Error fetching data:", error)

    } finally {

      setIsLoading(false)

    }

  }

  const formikObj = useFormik({

    initialValues: values,
    onSubmit: handleSubmit,
    validate: (values) => {
      const errors = {}
      if (!values.plateType) {
        errors.plateType = "Plate type is required"
      }
      if (!values.plateNum) {
        errors.plateNum = "Plate number is required"
      } else if (!(/^[A-Z]{3}-\d{3}$/i.test(values.plateNum))) {
        errors.plateNum = "Plate number must be in the format 'ABC-123'"
      }
      return errors
    }

  })

  // const handleCheck = () => {

  //   setIsLoading(true)

  //   // Simulate API call
  //   setTimeout(() => {
  //     setResult({
  //       status: "Vehicle is reported stolen",
  //       date: "April 23, 2023 at 14:30",
  //     })
  //     setIsLoading(false)
  //   }, 1000)

  // }

  console.log(checkData);
  

  return (

    <div className={styles.container}>

      <form onSubmit={formikObj.handleSubmit} className={styles.card}>

        <div className={styles.formGroup}>

          <label className={styles.label}>
            <p>Plate Type</p>
            {formikObj.touched.plateType && formikObj.errors.plateType && 
              <p className={styles.error_label}>* {formikObj.errors.plateType}</p>
            }
          </label>

          <div className={styles.selectWrapper}>
            <select 
              className={styles.select} 
              value={formikObj.values.plateType} 
              onChange={formikObj.handleChange} id="plateType"
            >
              <option value="" disabled>
                Select plate type
              </option>
              <option value="private">Private</option>
              <option value="commercial">Commercial</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="diplomatic">Diplomatic</option>
            </select>
          </div>

        </div>

        <div className={styles.formGroup}>

          <label className={styles.label}>
            <p>Enter Plate Number</p>
            {formikObj.touched.plateNum && formikObj.errors.plateNum && 
              <p className={styles.error_label}>* {formikObj.errors.plateNum}</p>
            }
          </label>

          <input
            name="plateNum"
            type="text"
            className={styles.input}
            placeholder="Enter plate number"
            value={formikObj.values.plateNum}
            onChange={formikObj.handleChange}
          />

        </div>

        <button className={styles.checkButton} type='submit'>
          {isLoading ? <RefreshCw className={styles.spinIcon} /> : <Search className={styles.searchIcon} />}
          Check Status
        </button>

      </form>

      {result && (

        <div className={!checkData ? styles.resultSuccessCard : styles.resultCard}>

          <div className={styles.alertContent}>

            {checkData ? <AlertTriangle className={styles.alertIcon} /> : <IoMdCheckmarkCircleOutline className={styles.successIcon} />}

            <div className={!checkData ? styles.alertSuccessText : styles.alertText}>{result.type}</div>

          </div>

          <div className={styles.timestamp}>Last updated: {result.date}</div>

        </div>

      )}

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
