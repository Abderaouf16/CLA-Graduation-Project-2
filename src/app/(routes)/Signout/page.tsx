'use client'
import React from 'react'
import logOut from './../../Components/Signuout/actions.ts'
import { useRouter } from 'next/router';


export default function LogoutButton() {
  
  const handleLogout = async () => {
    const response = await logOut();

    if (response.success) {
      // Remove user from localStorage
      localStorage.removeItem('user');
      console.log('User removed from localStorage');
    } else {
      console.error('Error logging out:', response.error);
    }
  };

  return (
    <button className='m-30 bg-green-300 p-10 ' onClick={handleLogout}>
      Log Out
    </button>
  );
}