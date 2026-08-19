import styles from "./PropertyONWordmark.module.css";

export default function PropertyONWordmark({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  return (
    <span className={`${styles.wordmark} ${dark ? styles.dark : ""} ${className}`} aria-label="PropertyON" dir="ltr">
      <span aria-hidden="true">Property</span><span className={styles.on} aria-hidden="true">ON</span>
    </span>
  );
}
