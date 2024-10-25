"use client"

import { User } from '@supabase/supabase-js'
import { logout } from "@/app/logout/actions"
import styles from "./style.module.css"

type UserLoggedInProps = {
  setUser: (user: User | null) => void
}

export default function UserLoggedIn({ setUser }: UserLoggedInProps) {
  const handleLogout = async () => {
    await logout()
    setUser(null) // Set user to null to trigger a re-render
  }

  return (
    <ul className={styles.ul}>
      <a className={styles.icon} href="/private">My Duck</a>
      <div>
        <button className={styles.icon} onClick={handleLogout}>Logout</button>
      </div>
    </ul>
  )
}
