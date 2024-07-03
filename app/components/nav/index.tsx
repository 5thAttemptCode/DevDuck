import styles from './style.module.css'

export default function Nav() {
  return (
    <nav>
      <a className={styles.logo} href="/">Duck Life</a>
      <a className={styles.login} href="/login">Login</a>
    </nav>
  )
}
