import CanvasComponent from "./components/canvas"
import UserLoggedIn from "./components/userLoggedIn"
import styles from './style.module.css'


export default function Home() {
  
  return (
    <main>
      <UserLoggedIn />
      <section>
        <h1 className={styles.h1}>The digital <span className={styles.span}>rubber duck</span> for developers</h1>
        <p className={styles.p}>Every developer has the right to have a super cool rubber duck. 
          With Duck Life you can create your personal rubber duck, 
          for a better developing experience.
        </p>
        <a className={styles.cta} href="/login">Start now</a>
      </section>
      <CanvasComponent>
        <ambientLight />
      </CanvasComponent>
    </main>
  )
}
