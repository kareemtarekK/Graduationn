import { useState } from "react"
import { Search, RefreshCw, AlertTriangle } from 'lucide-react'
import styles from "./check.module.css"

const CheckPlate = () => {
  const [plateType, setPlateType] = useState("")
  const [plateNumber, setPlateNumber] = useState("")
  const [result, setResult] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleCheck = () => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setResult({
        status: "Vehicle is reported stolen",
        date: "April 23, 2023 at 14:30",
      })
      setIsLoading(false)
    }, 1000)
  }

//   const handleReset = () => {
//     setPlateNumber("")
//     setPlateType("")
//     setResult(null)
//   }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Plate Type</label>
          <div className={styles.selectWrapper}>
            <select className={styles.select} value={plateType} onChange={(e) => setPlateType(e.target.value)}>
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
          <label className={styles.label}>Enter Plate Number</label>
          <input
            type="text"
            className={styles.input}
            placeholder="Enter plate number"
            value={plateNumber}
            onChange={(e) => setPlateNumber(e.target.value)}
          />
        </div>

        <button className={styles.checkButton} onClick={handleCheck} disabled={!plateType || !plateNumber || isLoading}>
          {isLoading ? <RefreshCw className={styles.spinIcon} /> : <Search className={styles.searchIcon} />}
          Check Status
        </button>
      </div>

      {result && (
        <div className={styles.resultCard}>
          <div className={styles.alertContent}>
            <AlertTriangle className={styles.alertIcon} />
            <div className={styles.alertText}>{result.status}</div>
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
