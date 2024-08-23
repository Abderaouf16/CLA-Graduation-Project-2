import { redirect } from 'next/navigation'

import { createClient } from './../../../../utils/supabase/server.ts'

export default async function CheckAuth() {
  const supabase = createClient()

  

  // Function to check if the user is authenticated

  const { data: { session }, error } = await supabase.auth.getSession()

  if (session) {
    
    console.log('User is authenticated:', session.user)
    return <p>user is authenticated:</p>
      
  } else {
      console.log('User is not authenticated')
      return <p>user is not authenticated:</p>


  }



}