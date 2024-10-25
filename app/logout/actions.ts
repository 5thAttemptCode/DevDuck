"use server"

import { createClient } from "@/app/utils/supabase/server"
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'


export async function logout() {

  const supabase = createClient()

  const { error } = await supabase.auth.signOut()

  if (error) {
    redirect('/error')
    return
  }

  revalidatePath('/', 'layout')
  redirect('/')
}