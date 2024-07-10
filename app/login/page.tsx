import { GithubLogo } from '@phosphor-icons/react/dist/ssr'
import { login, signup, loginWithGitHub } from './actions'
import styles from "./style.module.css"


export default function LoginPage() {

  return (
    <section className={styles.section}>
      <form className={styles.form} action={loginWithGitHub} method="post">
        <span className={styles.span}>
          <label htmlFor="button">Sign in with</label>
          <button className={styles.github} type="submit"> <GithubLogo size={20} /> &nbsp; Login with GitHub</button>
        </span>
      </form>
      <p>or sign in with</p>
      <form className={styles.form}>
        <span className={styles.span}>
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" required />
        </span>
        <span className={styles.span}>
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" required />
        </span>
        <button className={styles.github} formAction={login}>Log in</button>
        <button className={styles.github} formAction={signup}>Sign up</button>
      </form> 
    </section>
  )
}