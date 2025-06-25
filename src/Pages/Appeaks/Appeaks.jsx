"use client"

import { useState } from "react"
import styles from "./appeaks.module.css"
// import { useParams } from "react-router-dom";


const Appeaks = () => {
  // Form state
  const [formData, setFormData] = useState({
    reportNumber: "",
    reason: "",
    files: [],
  })

 
  // UI states
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [errors, setErrors] = useState({})

  // Current date for review (set to 14 days from now)
  const reviewDate = new Date()
  reviewDate.setDate(reviewDate.getDate() + 14)
  const formattedReviewDate = reviewDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // Handle file uploads
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files)
    setFormData({
      ...formData,
      files: [...formData.files, ...selectedFiles],
    })
  }

  // Remove a file from the list
  const removeFile = (index) => {
    const updatedFiles = [...formData.files]
    updatedFiles.splice(index, 1)
    setFormData({
      ...formData,
      files: updatedFiles,
    })
  }

  // Validate form
  const validateForm = () => {
    const newErrors = {}

    if (!formData.reportNumber.trim()) {
      newErrors.reportNumber = "Report number is required"
    }

    if (!formData.reason.trim()) {
      newErrors.reason = "Reason for grievance is required"
    } else if (formData.reason.trim().length < 20) {
      newErrors.reason = "Please provide a detailed explanation (at least 20 characters)"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setShowNotification(true)

      // Reset form after successful submission
      setFormData({
        reportNumber: "",
        reason: "",
        files: [],
      })

      // Hide notification after 5 seconds
      setTimeout(() => {
        setShowNotification(false)
      }, 5000)
    }, 1500)
  }

  // Get file type icon/preview
  const getFilePreview = (file, index) => {
    const isImage = file.type.startsWith("image/")

    if (isImage) {
      return (
        <div className={styles.previewImage}>
          <img src={URL.createObjectURL(file) || "/placeholder.svg"} alt={`Preview ${index}`} />
        </div>
      )
    }

    return (
      <div className={styles.fileIcon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
        <span>{file.name}</span>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.title}>Report Grievance Appeal</h1>
          <p className={styles.subtitle}>
            If your report was rejected and you believe this was in error, you can submit a grievance appeal for review.
            Your appeal will be reviewed by our team by <span className={styles.date}>{formattedReviewDate}</span>.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="reportNumber" className={styles.label}>
              Report Number <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="reportNumber"
              name="reportNumber"
              value={formData.reportNumber}
              onChange={handleChange}
              className={`${styles.input} ${errors.reportNumber ? styles.inputError : ""}`}
              placeholder="Enter the rejected report number"
            />
            {errors.reportNumber && <p className={styles.errorMessage}>{errors.reportNumber}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="reason" className={styles.label}>
              Reason for Grievance <span className={styles.required}>*</span>
            </label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className={`${styles.textarea} ${errors.reason ? styles.inputError : ""}`}
              placeholder="Please explain in detail why you believe the report rejection was incorrect"
              rows={5}
            />
            {errors.reason && <p className={styles.errorMessage}>{errors.reason}</p>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Supporting Documents</label>
            <div className={styles.fileUpload}>
              <label htmlFor="files" className={styles.fileUploadLabel}>
                <div className={styles.fileUploadContent}>
                  <svg
                    className={styles.uploadIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                  <span className={styles.uploadText}>Drag and drop files or click to browse</span>
                  <span className={styles.uploadSubtext}>
                    Upload photos, videos or documents that support your grievance
                  </span>
                </div>
              </label>
              <input
                type="file"
                id="files"
                name="files"
                onChange={handleFileChange}
                className={styles.fileInput}
                multiple
                accept="image/*,video/*,.pdf,.doc,.docx"
              />
            </div>

            {formData.files.length > 0 && (
              <div className={styles.fileList}>
                {formData.files.map((file, index) => (
                  <div key={index} className={styles.fileItem}>
                    {getFilePreview(file, index)}
                    <button
                      type="button"
                      className={styles.removeFileBtn}
                      onClick={() => removeFile(index)}
                      aria-label="Remove file"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={styles.formActions}>
            <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
              <div className={styles.buttonContent}>
                {isSubmitting ? (
                  <div className={styles.loadingWrapper}>
                    <svg
                      className={styles.loadingSpinner}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className={styles.loadingCircle}
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className={styles.loadingPath}
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></path>
                    </svg>
                    <span>Submitting...</span>
                  </div>
                ) : (
                  <>
                    <span>Submit Grievance</span>
                    <svg
                      className={styles.sendIcon}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </>
                )}
              </div>
            </button>
          </div>
        </form>

        <div className={styles.disclaimer}>
          <div className={styles.disclaimerIcon}>
            <svg
              className={styles.infoIcon}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </div>
          <p className={styles.disclaimerText}>
             All grievances are reviewed thoroughly by our team. Please ensure all information provided is accurate and
            truthful. Submitting false information may result in permanent account suspension.
          </p>
        </div>
      </div>

      {showNotification && (
        <div className={styles.notification}>
          <div className={styles.notificationContent}>
            <svg
              className={styles.successIcon}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <div>
              <h3 className={styles.notificationTitle}>Grievance Submitted Successfully</h3>
              <p className={styles.notificationText}>
                Your grievance has been received and will be reviewed by our team. You will be notified of the decision.
              </p>
            </div>
          </div>
          <button
            className={styles.closeNotification}
            onClick={() => setShowNotification(false)}
            aria-label="Close notification"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}

export default Appeaks
