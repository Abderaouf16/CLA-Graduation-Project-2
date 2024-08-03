import React from "react";
import Header from "../../Components/Header/Header";
import "./Home.css";
function Page() {
  return (
    <>
      <div className="px-4 md:px-6 xl:px-14 ">
        <Header />
        <div
          className="bg-slate-400 w-full h-[550px] rounded-2xl my-10  relative"
          style={{
            backgroundImage: `url(/heroImg.jpg)`, // Public path reference
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="blurContainer bg-slate-500  w-[350px] h-[150px]  rounded-2xl  absolute bottom-0 left-0 m-5 p-3">
            <div className=" bg-red-400 flex ">
              <div className="heroPofileImg"></div>
              <div className=" mx-3">
                <h1 className=' text-sm text-white font-bold '>Anderson chavvaria</h1>
                <p className=' text-xs text-white font-base'>@andrs</p>
              </div>
            </div>
            <div className=" bg-blue-800">
              <h1 className='text-white text-3xl'>Modern luxury living  space revealed</h1>
            </div>
            <div className="bg-green-500">
              <h1>fff</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
