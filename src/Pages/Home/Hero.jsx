//import heroCss from './home.module.css'
//import heroCss from "./home.module.css";
//import hero from "./vehicle-status-checker.module.css"
import hero from "./home.module.css";

export default function Hero() {
  return (
    <div className={hero.container}>
      {/* Vehicle Status Checker Section */}
      <div className={hero.header}>
        <h1 className={hero.title}>Check Your Vehicle Status</h1>
        <p className={hero.description}>
          Verify vehicle plate numbers and report theft cases to the authorities.
        </p>
      </div>

      <div className={hero.buttonContainer}>
        <button className={hero.primaryButton}>
          <SearchIcon />
          <span>Check Plate Now</span>
        </button>
        <button className={hero.outlineButton}>
          <AlertTriangleIcon />
          <span>Report a Stolen Vehicle</span>
        </button>
      </div>

      <div className={hero.statsContainer}>
        <div className={hero.statsGrid}>
          <div className={hero.statsCard}>
            <div className={hero.iconContainer}>
              <DocumentIcon />
            </div>
            <div className={hero.statsContent}>
              <p className={hero.statsLabel}>Total Reports Submitted</p>
              <h3 className={hero.statsValue}>12,458</h3>
            </div>
          </div>

          <div className={hero.statsCard}>
            <div className={hero.iconContainer}>
              <AlertIcon />
            </div>
            <div className={hero.statsContent}>
              <p className={hero.statsLabel}>Verified Stolen Vehicles</p>
              <h3 className={hero.statsValue}>1,893</h3>
            </div>
          </div>

          <div className={hero.statsCard}>
            <div className={hero.iconContainer}>
              <ClockIcon />
            </div>
            <div className={hero.statsContent}>
              <p className={hero.statsLabel}>Reports Under Review</p>
              <h3 className={hero.statsValue}>246</h3>
            </div>
          </div>

          <div className={hero.statsCard}>
            <div className={hero.iconContainer}>
              <CheckIcon />
            </div>
            <div className={hero.statsContent}>
              <p className={hero.statsLabel}>Appeals Submitted</p>
              <h3 className={hero.statsValue}>89</h3>
            </div>
          </div>
        </div>

        <div className={hero.infoBox}>
          <div className={hero.infoIconContainer}>
            <InfoIcon />
          </div>
          <p className={hero.infoText}>
            All reports are reviewed by authorized officers. You will receive updates via your account. Our platform is
            directly connected with law enforcement databases to ensure accurate and up-to-date information.
          </p>
        </div>
      </div>
      
    </div>

 
  )
}

// Icon components
function SearchIcon() {
  return (
    <svg
      className={hero.buttonIcon}
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
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  )
}

function AlertTriangleIcon() {
  return (
    <svg
      className={hero.buttonIcon}
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
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
      <line x1="12" y1="9" x2="12" y2="13"></line>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
  )
}

function DocumentIcon() {
  return (
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
    </svg>
  )
}

function AlertIcon() {
  return (
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
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
      <line x1="12" y1="9" x2="12" y2="13"></line>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
  )
}

function ClockIcon() {
  return (
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
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  )
}

function CheckIcon() {
  return (
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
      <circle cx="12" cy="12" r="10"></circle>
      <path d="m9 12 2 2 4-4"></path>
    </svg>
  )
}

function InfoIcon() {
  return (
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
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>
  )
}
