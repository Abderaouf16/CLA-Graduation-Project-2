import { redirect } from 'next/navigation'

import { createClient } from './../../../../utils/supabase/server.ts'

export default async function PrivatePage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  
  if (error || !data?.user) {
    console.log('error getting users details')
  }

  return <p>Hello {data.user.email}</p>
}