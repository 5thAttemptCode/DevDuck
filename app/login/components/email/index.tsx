import { login, signup } from "../../actions"
import styles from "../../style.module.css"


export default function Email() {

  return (
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
  )
}
