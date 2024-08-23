'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from './../../../../utils/supabase/server'



export async function signupLogic(formData: FormData) {
    const supabase = createClient()
  
    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
      userName: formData.get('userName') as string, 
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    }
  
    const { error } = await supabase.auth.signUp(data)
  
    if (error) {
      return {error : error.message}
    }
    return { success: "Your account is created successfully ✅" };
    revalidatePath('/', 'layout')
    redirect('/Home')
  }
