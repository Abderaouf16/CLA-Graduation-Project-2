/* "use client"; // This ensures the component is treated as a Client Component

import { createClient } from './../../../../utils/supabase/client.ts'; 

function LogoutButton() {

  const supabase = createClient()


  async function handleSignOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error);
    } else {
      console.log('Signed out successfully');
      Redirect the user to a different page after sign-out
    }


  }

  return (
    <button className=' bg-green-300 p-3' onClick={handleSignOut}>
      Logout
    </button>
  );
}

export default LogoutButton;
 */

import { createClient } from './../../../../utils/supabase/server.ts'
 
export default async function PrivatePage() {
  
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  
  if (error || !data?.user) {
    return <p> user signout</p>
    console.log('error getting users details')
  }

  return <p>Hello {data.user.email}</p>
}