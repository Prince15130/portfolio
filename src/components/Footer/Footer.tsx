import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.logo}>Saurav Bakshi</span>
      <span className={styles.copy}>Design Technologist Portfolio · 2026</span>
      <span className={styles.copy}>Bengaluru, India</span>
    </footer>
  );
}
