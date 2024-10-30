'use client'

import Logo from '../logo'
import styles from './style.module.css'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'


export default function Nav() {

  return (
    <nav>
      <Logo />
      <ul className={styles.ul}>
        <SignedOut>
          <a className={styles.login} href="/login">Login</a>
        </SignedOut>
        <SignedIn>
          <a className={styles.login} href="/private">Duck Editor</a>
          <UserButton />
        </SignedIn>
      </ul>
    </nav>
  )
}