"use client"

import { createClient } from "@/utils/supabase/client"
import { useEffect, useState } from "react"
import { User } from '@supabase/supabase-js'
import { logout } from "@/app/logout/actions"
import { SignOut, UserSquare } from "@phosphor-icons/react"
import styles from "./style.module.css"


const supabase = createClient()


export default function UserLoggedIn() {
  const [ user, setUser ] = useState<User | null>(null)

  useEffect(() => {
    async function getUser() {
      const { data, error } = await supabase.auth.getUser()
      if (error || !data?.user) {
        setUser(null)
      } else {
        setUser(data.user)
      }
    }
    getUser()

    // Listen for auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT' || !session) {
        setUser(null)
      } else if (session) {
        setUser(session.user)
      }
    })

    // Cleanup listener on unmount
    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [])

  const handleLogout = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await logout(new FormData(event.currentTarget))
    setUser(null)
  }

  return (
    <ul className={styles.ul}>
      <a className={styles.icon} href="/private">My Duck</a>
      <form onSubmit={handleLogout}>
        <button className={styles.icon} type="submit">Logout</button>
      </form>
    </ul>
  )
}