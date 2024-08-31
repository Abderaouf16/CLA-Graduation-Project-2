'use server'
import { createClient } from './../../../../utils/supabase/server.ts'

export default async function logOut() {
    const supabase = createClient()

  
    const { error } = await supabase.auth.signOut()
    
    if (error) {
      return {error : error.message}
    }
    console.log('user signout')
    return { success: "user signout " };
   
  }