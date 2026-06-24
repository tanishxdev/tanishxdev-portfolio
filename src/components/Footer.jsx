import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.text}>
        Built by <span className={styles.name}>Tanish Kumar</span>
      </span>
      <span className={styles.mono}>React · Vite · 2026</span>
    </footer>
  )
}
