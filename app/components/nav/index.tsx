'use client'

import { useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'
import { createClient } from '@/utils/supabase/client'
import DropdownMenu from '../dropdown'
import Logo from '../logo'
import UserLoggedIn from '../userLoggedIn'
import styles from './style.module.css'
import { UserCircle } from '@phosphor-icons/react'


const supabase = createClient()


export default function Nav() {
  const [user, setUser] = useState<User | null>(null)

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

  return (
    <nav>
      <Logo />
      {!user ? (
        <a className={styles.login} href="/login">Try Duck-Life</a>
      ) : (
        <DropdownMenu buttonContent={<UserCircle size={32} />}>
          <UserLoggedIn />
        </DropdownMenu>
      )}
    </nav>
  )
}