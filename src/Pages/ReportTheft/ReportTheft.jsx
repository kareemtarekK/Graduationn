/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Upload, Send } from "lucide-react"
import styles from "./report.module.css"


const ReportTheft = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Show success message
    setShowToast(true)
    setTimeout(() => setShowToast(false), 5000)

    reset()
    setIsSubmitting(false)
  }
  return (
    <div className={styles.container}>
    <div className={styles.wrapper}>
      <div className={styles.formCard}>
        <div className={styles.header}>
          <h1 className={styles.title}>Report a stolen vehicle</h1>
          <p className={styles.subtitle}>Please provide all possible details to assist the relevant authorities in tracking the vehicle</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="fullName" className={styles.label}>
              
              Full Name <span className={styles.required}>*</span>
            </label>
            
            <div className={styles.inputWrapper}>
              <input
                id="fullName"
                type="text"
                placeholder="Enter Your Name"
                className={`${styles.input} ${errors.fullName ? styles.inputError : ""}`}
                {...register("fullName", { required: "This field is required" })}
              />
              {errors.fullName && <p className={styles.errorMessage}>{errors.fullName.message}</p>}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phoneNumber" className={styles.label}>
              Phone Number <span className={styles.required}>*</span>
            </label>
            <div className={styles.inputWrapper}>
              <input
                id="phoneNumber"
                type="tel"
                placeholder="Enter Your Phone Number "
                className={`${styles.input} ${errors.phoneNumber ? styles.inputError : ""}`}
                {...register("phoneNumber", {
                  required: "This field is required",
                  pattern: {
                    value: /^[0-9+\s]+$/,
                    message: "Please enter a valid phone number",
                  },
                })}
              />
              {errors.phoneNumber && <p className={styles.errorMessage}>{errors.phoneNumber.message}</p>}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="plateNumber" className={styles.label}>
            Plate number <span className={styles.required}>*</span>
            </label>
            <div className={styles.inputWrapper}>
              <input
                id="plateNumber"
                type="text"
                placeholder="Enter Your Plate Number"
                className={`${styles.input} ${errors.plateNumber ? styles.inputError : ""}`}
                {...register("plateNumber", { required: "This field is required" })}
              />
              {errors.plateNumber && <p className={styles.errorMessage}>{errors.plateNumber.message}</p>}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="nationalId" className={styles.label}>
            National ID (optional)
            </label>
            <div className={styles.inputWrapper}>
              <input id="nationalId" type="text" 
              placeholder="Enter Your National Id" className={styles.input} {...register("nationalId")} />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="theftAddress" className={styles.label}>
            The address where the theft occurred <span className={styles.required}>*</span>
            </label>
            <div className={styles.inputWrapper}>
              <input
                id="theftAddress"
                type="text"
                placeholder="Enter YourThe address where the theft occurred "
                className={`${styles.input} ${errors.theftAddress ? styles.inputError : ""}`}
                {...register("theftAddress", { required: "This field is required" })}
              />
              {errors.theftAddress && <p className={styles.errorMessage}>{errors.theftAddress.message}</p>}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="theftDateTime" className={styles.label}>
            Approximate time and date of the theft <span className={styles.required}>*</span>
            </label>
            <div className={styles.inputWrapper}>
              <input
                id="theftDateTime"
                type="datetime-local"
                placeholder="Approximate time and date of the theft"
                className={`${styles.input} ${errors.theftDateTime ? styles.inputError : ""}`}
                {...register("theftDateTime", { required: "This field is required" })}
              />
              {errors.theftDateTime && <p className={styles.errorMessage}>{errors.theftDateTime.message}</p>}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="vehicleSpecs" className={styles.label}>
            Car specifications (model, color, distinctive markings) <span className={styles.required}>*</span>
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="vehicleSpecs"
                placeholder="Car specifications (model, color, distinctive markings"
                className={`${styles.textarea} ${errors.vehicleSpecs ? styles.inputError : ""}`}
                {...register("vehicleSpecs", { required: "This field is required" })}
              />
              {errors.vehicleSpecs && <p className={styles.errorMessage}>{errors.vehicleSpecs.message}</p>}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="incidentDescription" className={styles.label}>
            Describe the perpetrators or what happened in detail  <span className={styles.required}>*</span>          
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="incidentDescription"
                placeholder="Describe the perpetrators or what happened in detail "
                className={`${styles.textarea} ${errors.incidentDescription ? styles.inputError : ""}`}
                {...register("incidentDescription", { required: "This field is required" })}
              />
              {errors.incidentDescription && (
                <p className={styles.errorMessage}>{errors.incidentDescription.message}</p>
              )}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="attachments" className={styles.label}>
            Attach a photo or video (optional)            </label>
            <div className={styles.inputWrapper}>
              <div className={styles.fileUpload}>
                <label htmlFor="attachments" className={styles.fileUploadLabel}>
                  <div className={styles.fileUploadContent}>
                    <Upload className={styles.uploadIcon} />
                    <p className={styles.uploadText}>Click to download or drag and drop</p>
                    <p className={styles.uploadSubtext}>Photos or video (max. 10MB)</p>
                  </div>
                  <input
                    id="attachments"
                    type="file"
                    className={styles.fileInput}
                    accept="image/*,video/*"
                    multiple
                    {...register("attachments")}
                  />
                </label>
              </div>
            </div>
          </div>

          <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
            {isSubmitting ? (
              <span className={styles.loadingWrapper}>
                <svg
                  className={styles.loadingSpinner}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
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
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              <span className={styles.buttonContent}>
                <Send className={styles.sendIcon} />
                Send the report              
                </span>
            )}
          </button>
        </form>
      </div>

      <div className={styles.disclaimer}>
        <div className={styles.disclaimerIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.infoIcon} viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <p className={styles.disclaimerText}>
        The information provided on this form is confidential and is used only for investigative purposes. For more information, please contact          
        <a href="#" className={styles.disclaimerLink}>
        'Local police station'         </a>
          
        </p>
      </div>
    </div>

    {showToast && (
      <div className={styles.toast}>
        <div className={styles.toastContent}>
          <div className={styles.toastTitle}>The report has been received</div>
          <div className={styles.toastDescription}>We will contact you soon</div>
        </div>
        <button className={styles.toastClose} onClick={() => setShowToast(false)}>
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
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    )}
  </div>
  )
}

export default ReportTheft