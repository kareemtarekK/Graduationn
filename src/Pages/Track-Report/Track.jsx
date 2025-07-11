"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FiSearch, FiClock, FiX, FiCheck, FiAlertCircle, FiMessageSquare } from "react-icons/fi"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import styles from "./track.module.css"

const mockReports = [
  { id: "RPT-2025-001", date: "January 15, 2025", status: "Pending" },
  { id: "RPT-2025-002", date: "January 14, 2025", status: "Completed" },
  { id: "RPT-2025-003", date: "January 13, 2025", status: "Closed" },
  { id: "RPT-2025-004", date: "January 12, 2025", status: "Pending" },
  { id: "RPT-2025-005", date: "January 11, 2025", status: "Completed" },
  { id: "RPT-2025-006", date: "January 10, 2025", status: "Closed" },
  { id: "RPT-2025-007", date: "January 9, 2025", status: "Pending" },
  { id: "RPT-2025-008", date: "January 8, 2025", status: "Completed" },
]

const Track = () => {
  const navigate = useNavigate()
  const [reportsData, setReportsData] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [filteredData, setFilteredData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [validationError, setValidationError] = useState("")
  const [pageLoaded, setPageLoaded] = useState(false)

  // Page entrance animation
  useEffect(() => {
    setTimeout(() => {
      setPageLoaded(true)
    }, 100)
  }, [])

  // Simulate API call
  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setReportsData(mockReports)
      setFilteredData(mockReports)
      setIsLoading(false)
    }, 1000)
  }, [])

  const getStatusIcon = (status) => {
    switch (status) {
      case "Pending":
        return <FiClock className={styles.statusIconElement} />
      case "Closed":
        return <FiX className={styles.statusIconElement} />
      case "Completed":
        return <FiCheck className={styles.statusIconElement} />
      default:
        return <FiAlertCircle className={styles.statusIconElement} />
    }
  }

  const handleSearch = () => {
    setError("")
    setValidationError("")

    // Validation: Check if input is empty
    if (!searchInput.trim()) {
      setValidationError("Report ID is required")
      return
    }

    const filtered = reportsData.filter((report) => report.id.toLowerCase().includes(searchInput.toLowerCase()))

    if (filtered.length === 0) {
      setError("No report found with this number")
      setFilteredData([])
    } else {
      setFilteredData(filtered)
    }
  }

  const handleInputChange = (value) => {
    setSearchInput(value)
    setError("")
    setValidationError("")

    if (!value.trim()) {
      setFilteredData(reportsData)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  const handleAppeaksNavigation = (reportId) => {
    // Scroll to top of page
    window.scrollTo(0, 0)
    // Navigate to appeals page with specific report ID
    navigate(`/appeaks/${reportId}`)
  }

  return (
    <div className={`${styles.container} ${pageLoaded ? styles.pageLoaded : ""}`}>
      <div className={styles.wrapper}>
        {/* Search Section with Title */}
        <div className={`${styles.searchSection} ${styles.fadeInDown}`} style={{ animationDelay: "0.2s" }}>
          <div className={styles.searchCard}>
            <div className={styles.searchContent}>
              {/* Title and Subtitle */}
              <div className={styles.titleSection}>
                <h1 className={styles.title}>Reports Tracking & Follow-up</h1>
                <p className={styles.subtitle}>Track and monitor your submitted reports</p>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="search" className={styles.label}>
                  Search Reports <span className={styles.required}>*</span>
                </label>
                <input
                  id="search"
                  type="text"
                  placeholder="Enter report number (e.g., RPT-2025-001)"
                  value={searchInput}
                  onChange={(e) => handleInputChange(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className={`${styles.input} ${validationError ? styles.inputError : ""}`}
                />
                {validationError && (
                  <div className={styles.validationError}>
                    <FiAlertCircle className={styles.validationIcon} />
                    {validationError}
                  </div>
                )}
              </div>
              <button onClick={handleSearch} className={styles.searchButton}>
                <FiSearch className={styles.searchIcon} />
                Search Reports
              </button>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className={`${styles.errorSection} ${styles.fadeInDown}`}>
            <div className={styles.errorMessage}>
              <FiAlertCircle className={styles.errorIcon} />
              {error}
            </div>
          </div>
        )}

        {/* Loading Spinner */}
        {isLoading && (
          <div className={`${styles.loadingSection} ${styles.fadeInDown}`}>
            <AiOutlineLoading3Quarters className={styles.loadingIcon} />
            <p className={styles.loadingText}>Loading reports...</p>
          </div>
        )}

        {/* Reports Grid */}
        {!isLoading && (
          <div className={`${styles.reportsGrid} ${styles.fadeInDown}`} style={{ animationDelay: "0.4s" }}>
            {filteredData.map((report, index) => (
              <div
                key={`${report.id}-${index}`}
                className={styles.reportCard}
                style={{
                  animationDelay: `${0.6 + index * 0.1}s`,
                }}
              >
                <div className={styles.cardContent}>
                  {/* Header with status */}
                  <div className={styles.cardHeader}>
                    <span className={styles.reportLabel}>Report -</span>
                    <span className={`${styles.statusBadge} ${styles[`status${report.status}`]}`}>{report.status}</span>
                  </div>

                  {/* Report ID */}
                  <div className={styles.reportId}>
                    <h3>{report.id}</h3>
                  </div>

                  {/* Date and Icon */}
                  <div className={styles.cardFooter}>
                    <span className={styles.reportDate}>{report.date}</span>
                    <div className={styles.statusIcon}>{getStatusIcon(report.status)}</div>
                  </div>
                  {/* Appeal Button - Only for Closed Reports */}
                  {report.status === "Closed" && (
                    <div className={styles.appealButtonContainer}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleAppeaksNavigation(report.id)
                        }}
                        className={styles.appealButton}
                      >
                        <FiMessageSquare className={styles.appealIcon} />
                        Submit Appeal
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && filteredData.length === 0 && !error && (
          <div className={`${styles.emptyState} ${styles.fadeInDown}`}>
            <FiSearch className={styles.emptyIcon} />
            <div className={styles.emptyMessage}>No reports to display</div>
            <p className={styles.emptySubtext}>Try adjusting your search criteria</p>
          </div>
        )}

        {/* Stats Summary */}
        {!isLoading && filteredData.length > 0 && (
          <div className={`${styles.summarySection} ${styles.fadeInDown}`} style={{ animationDelay: "0.8s" }}>
            <div className={styles.summaryCard}>
              <h3 className={styles.summaryTitle}>Summary</h3>
              <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <div className={`${styles.statNumber} ${styles.pendingColor}`}>
                    {filteredData.filter((r) => r.status === "Pending").length}
                  </div>
                  <div className={styles.statLabel}>Pending</div>
                </div>
                <div className={styles.statItem}>
                  <div className={`${styles.statNumber} ${styles.completedColor}`}>
                    {filteredData.filter((r) => r.status === "Completed").length}
                  </div>
                  <div className={styles.statLabel}>Completed</div>
                </div>
                <div className={styles.statItem}>
                  <div className={`${styles.statNumber} ${styles.closedColor}`}>
                    {filteredData.filter((r) => r.status === "Closed").length}
                  </div>
                  <div className={styles.statLabel}>Closed</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Track
