import React from 'react'
import logOut from './../../Components/Signuout/actions.ts'

function page() {
  return (
    <>
    <form action={logOut}>
      <button  className='bg-green-300 p-3' type='submit' >
        signout
      </button>
    </form>
    </>
  )
}

export default page