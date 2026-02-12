import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
      <footer className={styles.footer}>
        <div className={styles.row}>
          <div>
                    <p className={styles.center}>&copy; 2026 JS Designs. All rights reserved.</p>
          </div>
          <div>
            <h3 className={styles.center}>Contact Us</h3>
            <p className={styles.center}>Phone: <a href="tel:+16478960834">(647) 896-0834</a><br />
            Email: <a href="mailto:jack@jsdesigns.ca">jack@jsdesigns.ca</a></p>
          </div>
          <div>
            <p className={styles.center}><Link href="/privacypolicy">Privacy Policy</Link></p>
            <p className={styles.center}><Link href="/termsofuse">Terms of Use</Link></p>
          </div>
        </div>
      </footer>
  );
}
