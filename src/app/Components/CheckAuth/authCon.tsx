import React, { useState, useEffect } from "react";
import { useAuth } from "./../../Context/AuthContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignBtns() {
  const [loading, setLoading] = useState(true);
  const result = useAuth();

  useEffect(() => {
    if (result !== undefined) {
      setLoading(false);
    }
  }, [result]);

  if (loading) {
    return (
      <>
        <div
          className="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-surface dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </>
    ); // You can customize this with a spinner or a better loading indicator.
  }

  if (result) {
    console.log("can work");
    return (
      <>
        <h1>Logged in</h1>
      </>
    );
  } else {
    console.log("can't work");
    return (
      <>
        <Button
          className="px-8 ml-5 mr-2 border-[#EBEBEB] border-2 text-black rounded-xl bg-transparent hover:bg-[#EBEBEB]"
          asChild
        >
          <Link href="/Signin" className="font-semibold text-[13px]">
            Sign In
          </Link>
        </Button>
        <Button className="px-8 rounded-xl" asChild>
          <Link href="/Signup" className="font-semibold text-[13px]">
            Sign Up
          </Link>
        </Button>
      </>
    );
  }
}
