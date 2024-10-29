import Email from '../components/email'
import Github from '../components/github'
import styles from "./style.module.css"
import { SignIn } from '@clerk/nextjs'


export default function LoginPage() {

  return (
    <section className={styles.section}>
      <SignIn />
    </section>
  )
}