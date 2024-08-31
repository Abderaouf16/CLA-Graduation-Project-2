'use server'
import { createClient } from './../../../../utils/supabase/server.ts'
 
export default async function checkAuth() {
  
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
 
  return {data, error}

}
