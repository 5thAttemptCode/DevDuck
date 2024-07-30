'use client'

import DropdownMenu from '../dropdown'
import Logo from '../logo'
import UserLoggedIn from '../userLoggedIn'
import styles from './style.module.css'
import { UserCircle } from '@phosphor-icons/react'
import { useUser } from '../customHooks/user'


export default function Nav() {

  const user = useUser()

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