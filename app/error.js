"use client";

import styles from "./error.module.css";

export default function Error({ reset }) {
  return (
    <div className={styles.page}>
      <h1>Something went wrong</h1>
      <p>An unexpected error occurred. Please try again.</p>
      <button className={styles.button} onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}
