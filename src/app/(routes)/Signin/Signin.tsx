"use client";

import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import { useForm, SubmitHandler } from 'react-hook-form';
import Link from "next/link";
import login from './actions.ts'


import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"

interface IFormInput {
  userName: string;
  email: string,
  password: string,
  href:string

}




function Signin() {

  const { toast } = useToast()

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if ( data.email && data.password) {
      toast({
        title: "You're Sign in successfully ✅ ",
        description: "Redirecting to HomePage ",
        duration: 5000,
        className: " border-green-500 "
      })
    }
  };




  return (
    <>
      <Header />
      <div className="px-4 md:px-6 xl:px-14 py-16  w-full h-screen flex justify-center items-center">
        <div className="bg-[#EBEBEB] w-[550px]  mt-[80px] rounded-3xl">
          <div className=" w-[80%] sm:w-[50%] m-auto h-full ">
            <div className=" py-9">
              <h1 className='text-center font-bold text-2xl  pb-5'>Sign in</h1>
              <form onSubmit={handleSubmit(onSubmit)} className=' '>

                <input 
                  className={`w-full py-3 mt-3 text-xs px-2 rounded-md ${errors.email ? "border-2 border-red-500" : "border-none"} focus:outline-none focus:ring-0`} 

                  type="text" 
                  
                  placeholder="Email" 
                  {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }})} 
                />
                {errors.email && <p className=' text-[11px]  text-red-500 pt-2 px-2 '>{errors.email.message}</p>}

                <input 
                  className={`w-full py-3 mt-3 text-xs px-2 rounded-md ${errors.password ? "border-2 border-red-500" : "border-none"} focus:outline-none focus:ring-0`} 

                  type="password" 
                  placeholder="Password" 
                  {...register("password", { required: "Password is required", minLength: { value: 4, message: "Minimum length is 4 characters" }, maxLength: { value: 12, message: "Maximum length is 12 characters" }})} 
                />
                      {errors.password && <p className=' text-[11px]  text-red-500 pt-2 px-2 '>{errors.password.message}</p>}
       
                  <button type='submit' formAction={login} className='bg-black text-white w-full py-3 mt-8 mb-4 font-semibold text-sm  rounded-md'>Sign in</button>
            </form>
            <div className="py-1">
              <p className=' text-black text-xs text-center '>Don't' have an account ? 
              <Link
                          href="/Signup"
                          className="inline-block text-blue-500 px-2 hover:underline "
                        >
                          Sign Up
                        </Link>
                         </p>
              
            </div>
            <button type='submit'  
        className=' flex justify-center items-center bg-black text-white w-full py-3 my-4 font-semibold text-xs  rounded-lg '>
              <img src="https://www.vectorlogo.zone/logos/google/google-icon.svg" className='h-5 inline-block  ' alt="" /> <p className='inline px-2'>Sign in with Google</p></button>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
