import React, { useState, useEffect, useMemo } from "react";
import { useAuth } from "./../../Context/AuthContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThreeDot } from "react-loading-indicators";

function SignBtns() {
  const [loading, setLoading] = useState(true);
  const result = useAuth();

  useEffect(() => {
    if (result !== undefined) {
      setLoading(false);
    }
  }, [result]);

  if (loading) {
    return (
      <div className="">
        <ThreeDot variant="pulsate" color="#31a3cc" size="small" text="" textColor="" />
      </div>
    );
  }

  if (result) {
    console.log("can work");
    return (
      <h1>Logged in</h1>
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

export default React.memo(SignBtns);
