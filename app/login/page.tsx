import { login, signup, loginWithGitHub } from './actions'
import styles from "./style.module.css"


export default function LoginPage() {

  return (
    <section className={styles.section}>
      <form className={styles.form} action={loginWithGitHub} method="post">
        <button type="submit">Login with GitHub</button>
      </form>
      <form className={styles.form}>
        <span className={styles.span}>
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" required />
        </span>
        <span className={styles.span}>
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" required />
        </span>
        <button formAction={login}>Log in</button>
        <button formAction={signup}>Sign up</button>
      </form> 
    </section>
  )
}