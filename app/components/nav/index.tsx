'use client'

import DropdownMenu from '../dropdown'
import Logo from '../logo'
import UserLoggedIn from '../userLoggedIn'
import styles from './style.module.css'
import { UserCircle } from '@phosphor-icons/react'
import { useUserContext } from '../../context/userContext'

export default function Nav() {
  const { user, setUser } = useUserContext() // Use context to get user and setUser

  return (
    <nav>
      <Logo />
      {!user ? (
        <a className={styles.login} href="/login">Try DevDuck</a>
      ) : (
        <DropdownMenu buttonContent={<UserCircle size={32} />}>
          <UserLoggedIn setUser={setUser} /> {/* Pass setUser to UserLoggedIn */}
        </DropdownMenu>
      )}
    </nav>
  )
}