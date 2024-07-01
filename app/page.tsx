import { logout } from "./logout/actions"


export default function Home() {
  
  return (
    <form action={logout}>
      <button type="submit">Logout</button>
    </form>
  )
}
