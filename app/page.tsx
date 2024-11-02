"use client"

import CanvasComponent from "./components/canvas"
import Headline from "./components/headline"
import styles from './style.module.css'
import { SignedIn, SignedOut } from "@clerk/nextjs"


export default function Home() {
  
  return (
    <main>
      <section>
        <h1 className={styles.h1}>The digital <span className={styles.span}>rubber duck</span> for developers</h1>
        <p className={styles.p}>
          Every developer has the right to have a super cool rubber duck. 
          With DevDuck you can create your personal rubber duck, 
          for a better developing experience.
        </p>
        <SignedOut>
          <a className={styles.cta} href="/signUp">START NOW</a>
        </SignedOut>
        <SignedIn>
          <a className={styles.cta} href="/private">Customize your Duck</a>
        </SignedIn>
      </section>

      <CanvasComponent backgroundColor="var(--bg-clr-sec)">
        <ambientLight />
      </CanvasComponent>

      <section>
        <Headline text="Customize your own rubber duck" />
        <p className={styles.p}>
          The reason I never got a physical rubber duck is because I hate their yellow color. My dream rubber duck is navy 
          blue with a black beak. I was sure I wasnt the only developer facing this issue, so DevDuck was born. DevDuck
          allows you to customize your own digital rubber duck.
        </p>
      </section>
      
      <section>
        <Headline text="Duck-off plastic!" />
        <p className={styles.p}>
          Ain't nobody got time for plastic! Yes we could produce sustainable physical rubber ducks by reusing old 
          plastic and blablabla, but 3D is just as cool.
        </p>
      </section>
    </main>
  )
}