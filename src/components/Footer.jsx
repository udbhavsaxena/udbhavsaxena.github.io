import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.text}>
          Built with React + Vite &mdash; Udbhav Saxena &copy; {new Date().getFullYear()}
        </p>
        <a href="#hero" className={styles.top} aria-label="Back to top">
          ↑ Top
        </a>
      </div>
    </footer>
  )
}
