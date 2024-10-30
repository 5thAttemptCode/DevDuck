import styles from "../../login/[[...login]]/style.module.css"
import { SignUp } from '@clerk/nextjs'


export default function SignUpPage() {

  return (
    <section className={styles.section}>
      <SignUp />
    </section>
  )
}