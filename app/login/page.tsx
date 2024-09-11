import Email from './components/email'
import Github from './components/github'
import styles from "./style.module.css"


export default function LoginPage() {

  return (
    <section className={styles.section}>
      <div className={styles.formContainer}>
        <Github />
        {/* <p className={styles.p}>or sign in with</p>
        <Email /> */}
      </div>
    </section>
  )
}