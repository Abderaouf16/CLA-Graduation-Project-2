"use client";

import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import { useForm, SubmitHandler } from 'react-hook-form';
import Link from "next/link";



import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"

interface IFormInput {
  userName: string;
  email: string,
  password: string,
  href:string

}




function Signup() {

  const { toast } = useToast()

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (data.userName && data.email && data.password) {
      toast({
        title: "Your account is created successfully ✅",
        description: "Enjoy your journey 😊 ",
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
              <h1 className='text-center font-bold text-2xl  pb-5'>Sign up</h1>
              <form onSubmit={handleSubmit(onSubmit)} className=' '>
                <input 
                  className={`w-full py-3 mt-3 text-xs px-2 rounded-md ${errors.userName ? "border-2 border-red-500" : "border-none"} focus:outline-none focus:ring-0`} 

                  type="text" 
                  placeholder="First name" 
                  {...register("userName", { required: "First name is required", maxLength: { value: 15, message: "Max length is 80 characters" } ,  pattern: {
                    value: /^[a-zA-Z]+$/,
                    message: "Username can only contain alphabetic characters"
                  }})} 
                />
                {errors.userName && <p className=' text-[11px]  text-red-500 pt-2 px-2 '>{errors.userName.message}</p>}

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
       
                  <button type='submit'  className='bg-black text-white w-full py-3 mt-8 mb-4 font-semibold text-sm  rounded-md'>Sign up</button>
            </form>
            <div className="py-1">
              <p className=' text-black text-xs text-center '>Already have an account ? 
              <Link
                          href="/Signin"
                          className="inline-block text-blue-500 px-2 hover:underline "
                        >
                          Sign In
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

export default Signup;
