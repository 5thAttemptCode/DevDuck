
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import CanvasComponent from '../components/canvas'
import styles from "./style.module.css"
import MainScene from '../components/canvas/components/mainscene'


export default async function PrivatePage() {
  
  const supabase = createClient()

  const { data: { user }, error } = await supabase.auth.getUser()
  if (error || !user) {
    redirect('/login')
  }

  return (
    <main className={styles.main}>

      <CanvasComponent backgroundColor={undefined}>
      
        <MainScene />
   
      </CanvasComponent>
    </main>
  )
}