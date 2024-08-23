import { redirect } from 'next/navigation'

import { createClient } from './../../../../utils/supabase/server.ts'

export default async function CheckAuth() {
  const supabase = createClient()


  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (data.user) {
    console.log('user exists')
  }else{
    'user does not exists'
  }

  

  // Function to check if the user is authenticated
}