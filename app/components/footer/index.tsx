import Logo from "../logo"
import styles from "./style.module.css"


const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <Logo />
        <a href="https://www.linkedin.com/in/henry-fuerst-10b58a187/" target="_blank">LinkedIn</a>
      </div>
    </footer>
  )
}
 
export default Footer