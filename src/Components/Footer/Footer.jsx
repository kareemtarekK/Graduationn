import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <h2 className={styles.columnTitle}>About</h2>
          <ul className={styles.columnLinks}>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h2 className={styles.columnTitle}>Services</h2>
          <ul className={styles.columnLinks}>
            <li>
              <a href="#">Check Plate</a>
            </li>
            <li>
              <a href="#">Report Theft</a>
            </li>
            <li>
              <a href="#">Track Report</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h2 className={styles.columnTitle}>Legal</h2>
          <ul className={styles.columnLinks}>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Disclaimer</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h2 className={styles.columnTitle}>Support</h2>
          <ul className={styles.columnLinks}>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Contact Support</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.copyright}>© 2025 License Plate AI Tracker & Theft Reporting. All rights reserved.</div>
        {/* <div className={styles.statusIndicator}>
          <span className={styles.statusDot}></span>
          System Operational
        </div> */}
      </div>
    </footer>
  )
}

export default Footer
