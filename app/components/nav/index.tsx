import Logo from '../logo'
import UserLoggedIn from '../userLoggedIn'
import styles from './style.module.css'

export default function Nav() {
  return (
    <nav>
      <Logo />
      <UserLoggedIn />
    </nav>
  )
}
