import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <h1>404</h1>
      <p>The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/" className={styles.link}>Back to Home</Link>
    </div>
  );
}
