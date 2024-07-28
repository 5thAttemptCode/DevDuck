import { GithubLogo } from '@phosphor-icons/react/dist/ssr'
import { loginWithGitHub } from "../../actions"
import styles from "../../style.module.css"


export default function Github() {

  return (
    <form className={styles.form} action={loginWithGitHub} method="post">
      <span className={styles.span}>
        <label htmlFor="button">Sign in with</label>
        <button className={styles.github} type="submit"> <GithubLogo size={20} /> &nbsp; Login with GitHub</button>
      </span>
    </form>
  )
}
