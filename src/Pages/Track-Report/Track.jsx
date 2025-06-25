"use client"

import { useRef, useState } from "react"
import styles from "./track.module.css"
import { Link } from "react-router-dom"
import { FaSearch, FaSpinner, FaDownload, FaBell } from "react-icons/fa"
import { jsPDF } from "jspdf"
import { motion } from "framer-motion"
import { Toaster, toast } from "react-hot-toast"

const staticReports = [
  {
    id: "REP-2025-0001",
    vehicleInfo: { plateNumber: "ABC 1234", type: "Toyota Camry", color: "White" },
    reportDate: "May 11, 2025 - 2:15 PM",
    details: "The vehicle was stolen from the house in Al-Nozha at 1 AM.",
    status: "received",
    adminResponse: "",
    lastUpdate: "May 11, 2025 - 2:15 PM",
  },
  {
    id: "REP-2025-0002",
    vehicleInfo: { plateNumber: "SAD 5678", type: "Honda Accord", color: "Black" },
    reportDate: "May 10, 2025 - 10:30 AM",
    details: "The car was stolen from a shopping center around 9 PM.",
    status: "reviewing",
    adminResponse: "",
    lastUpdate: "May 10, 2025 - 3:45 PM",
  },
  {
    id: "REP-2025-0003",
    vehicleInfo: { plateNumber: "TKM 9012", type: "Nissan Patrol", color: "Gray" },
    reportDate: "May 8, 2025 - 8:20 AM",
    details: "The vehicle was last seen on May 7 at 11 PM in Al-Rawda.",
    status: "approved",
    adminResponse: "The report is accepted. An investigator will contact you soon.",
    lastUpdate: "May 9, 2025 - 1:10 PM",
  },
  {
    id: "REP-2025-0004",
    vehicleInfo: { plateNumber: "LOW 3456", type: "Mercedes E200", color: "Silver" },
    reportDate: "May 5, 2025 - 4:50 PM",
    details: "Car was stolen from company parking at the industrial area.",
    status: "rejected",
    adminResponse: "Rejected due to lack of documents. Please provide images and proof.",
    lastUpdate: "May 7, 2025 - 11:25 AM",
  },
]

function Track() {
  const [reportId, setReportId] = useState("")
  const [plateNumber, setPlateNumber] = useState("")
  const [report, setReport] = useState(null)
  const [error, setError] = useState("")
  const [validationErrors, setValidationErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [searching, setSearching] = useState(false)
  const [notificationSubscribed, setNotificationSubscribed] = useState(false)
  const resultRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const errors = {}
    if (!reportId.trim()) errors.reportId = "* Report ID is required"
    if (!plateNumber.trim()) errors.plateNumber = "* Plate number is required"

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors)
      setReport(null)
      setError("")
      return
    }

    setValidationErrors({})
    setSearching(true)
    setIsSubmitted(true)
    setNotificationSubscribed(false)

    setTimeout(() => {
      const foundReport = staticReports.find((r) => r.id === reportId && r.vehicleInfo.plateNumber === plateNumber)

      if (foundReport) {
        setReport(foundReport)
        setError("")
        toast.success("Report found successfully!")
      } else {
        setReport(null)
        setError("No report found with this data. Please check and try again.")
        toast.error("No report found with this data.")
      }

      setSearching(false)

      setTimeout(() => {
        if (resultRef.current) {
          const offset = resultRef.current.offsetTop
          window.scrollTo({
            top: offset - 100,
            behavior: "smooth",
          })
        }
      }, 200)
    }, 1500)
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "received":
        return "📨"
      case "reviewing":
        return "🔍"
      case "approved":
        return "✅"
      case "rejected":
        return "❌"
      default:
        return "❓"
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case "received":
        return "Received"
      case "reviewing":
        return "Under Review"
      case "approved":
        return "Approved"
      case "rejected":
        return "Rejected"
      default:
        return "Unknown"
    }
  }

  const getStatusClass = (status) => {
    switch (status) {
      case "received":
        return styles.statusReceived
      case "reviewing":
        return styles.statusReviewing
      case "approved":
        return styles.statusApproved
      case "rejected":
        return styles.statusRejected
      default:
        return ""
    }
  }

  const handleDownloadPDF = () => {
    if (!report) return

    toast.loading("Generating PDF...", { duration: 1500 })

    setTimeout(() => {
      const doc = new jsPDF()

      // Add content
      doc.setFontSize(22)
      doc.text("Report Status", 105, 20, { align: "center" })

      doc.setFontSize(14)
      doc.text(`Report ID: ${report.id}`, 20, 40)
      doc.text(`Status: ${getStatusText(report.status)}`, 20, 50)
      doc.text(`Report Date: ${report.reportDate}`, 20, 60)
      doc.text(`Last Update: ${report.lastUpdate}`, 20, 70)

      doc.setFontSize(16)
      doc.text("Vehicle Information", 20, 90)
      doc.setFontSize(12)
      doc.text(`Plate Number: ${report.vehicleInfo.plateNumber}`, 30, 100)
      doc.text(`Type: ${report.vehicleInfo.type}`, 30, 110)
      doc.text(`Color: ${report.vehicleInfo.color}`, 30, 120)

      doc.setFontSize(16)
      doc.text("Report Details", 20, 140)
      doc.setFontSize(12)

      // Split long text to fit on page
      const splitDetails = doc.splitTextToSize(report.details, 170)
      doc.text(splitDetails, 30, 150)

      if (report.adminResponse) {
        const yPos = 150 + splitDetails.length * 10 + 10
        doc.setFontSize(16)
        doc.text("Admin Response", 20, yPos)
        doc.setFontSize(12)
        const splitResponse = doc.splitTextToSize(report.adminResponse, 170)
        doc.text(splitResponse, 30, yPos + 10)
      }

      // Save the PDF
      doc.save(`Report-${report.id}.pdf`)
      toast.success("PDF downloaded successfully!")
    }, 1500)
  }

  const handleSubscribeNotification = () => {
    setNotificationSubscribed(true)
    toast.success("You will be notified when there's an update on this report!")
  }

  return (
    <div className={styles.container}>
      <Toaster position="top-right" />

      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Track Report Status</h1>
        <p>Please enter the Report Number and Plate Number below to track the status of your report accurately</p>
      </motion.div>

      <motion.div
        className={styles.formContainer}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="reportId" className={styles.labelWithError}>
              <div>
                Report Number <span className={styles.required}>*</span>
              </div>
              <div>
                {validationErrors.reportId && <span className={styles.errorText}>{validationErrors.reportId}</span>}
              </div>
            </label>
            <input
              type="text"
              id="reportId"
              placeholder="e.g., REP-2025-0001"
              value={reportId}
              onChange={(e) => setReportId(e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="plateNumber" className={styles.labelWithError}>
              <div>
                Plate Number <span className={styles.required}>*</span>
              </div>
              <div>
                {validationErrors.plateNumber && (
                  <span className={styles.errorText}>{validationErrors.plateNumber}</span>
                )}
              </div>
            </label>
            <input
              type="text"
              id="plateNumber"
              placeholder="e.g., ABC 1234"
              value={plateNumber}
              onChange={(e) => setPlateNumber(e.target.value)}
              className={styles.input}
            />
          </div>

          <button type="submit" className={styles.submitButton} disabled={searching}>
            {searching ? <FaSpinner className={styles.spinnerIcon} /> : <FaSearch />} Check Status
          </button>
        </form>
      </motion.div>

      <div ref={resultRef}>
        {isSubmitted && (
          <div className={styles.resultContainer}>
            {error ? (
              <div className={styles.errorMessage}>{error}</div>
            ) : report ? (
              <div className={styles.reportDetails}>
                <div className={styles.reportHeader}>
                  <div className={styles.reportIdSection}>
                    <h2>Report ID: #{report.id}</h2>
                    <span className={`${styles.statusBadge} ${getStatusClass(report.status)}`}>
                      {getStatusIcon(report.status)} {getStatusText(report.status)}
                    </span>
                  </div>
                  <div className={styles.dateSection}>
                    <p>Report Date: {report.reportDate}</p>
                    <p>Last Update: {report.lastUpdate}</p>
                  </div>
                </div>

                <div className={styles.vehicleSection}>
                  <h3>Vehicle Info:</h3>
                  <div className={styles.vehicleInfo}>
                    <p>
                      <strong>Plate Number:</strong> {report.vehicleInfo.plateNumber}
                    </p>
                    <p>
                      <strong>Type:</strong> {report.vehicleInfo.type}
                    </p>
                    {report.vehicleInfo.color && (
                      <p>
                        <strong>Color:</strong> {report.vehicleInfo.color}
                      </p>
                    )}
                  </div>
                </div>

                <div className={styles.detailsSection}>
                  <h3>Report Details:</h3>
                  <p>{report.details}</p>
                </div>

                {report.adminResponse && (
                  <div className={styles.responseSection}>
                    <h3>Admin Response:</h3>
                    <p>{report.adminResponse}</p>
                  </div>
                )}

                <div className={styles.extraActions}>
                  <button onClick={handleDownloadPDF} className={styles.downloadButton}>
                    <FaDownload style={{ marginRight: "8px" }} /> Download as PDF
                  </button>

                  {report.status === "reviewing" && !notificationSubscribed && (
                    <button onClick={handleSubscribeNotification} className={styles.reminderButton}>
                      <FaBell style={{ marginRight: "8px" }} /> Notify me when updated
                    </button>
                  )}

                  {report.status === "reviewing" && notificationSubscribed && (
                    <div className={styles.notificationConfirm}>✓ You will be notified when updated</div>
                  )}
                </div>

                {report.status === "rejected" && (
                  <div className={styles.appealSection}>
                    <Link to={`/appeaks/${report.id}`} className={styles.appealButton}>
                      Submit Appeal
                    </Link>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  )
}

export default Track
