import React from "react";
import Header from "../../Components/Header/Header";
import "./Home.css";
function Page() {
  return (
    <>
        <Header />
      <div className="px-4 md:px-6 xl:px-14 py-16 ">
        <div
          className="bg-slate-400 w-full h-[550px] rounded-2xl my-10  relative"
          style={{
            backgroundImage: `url(/heroImg.jpg)`, // Public path reference
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="blurContainer bg-slate-500  w-[370px]  rounded-2xl  absolute bottom-0 left-0 m-5 py-3 px-5">
            <div className="  flex ">
              <div className="heroPofileImg"></div>
              <div className=" mx-3 ">
                <h1 className=" text-sm text-white font-semibold ">
                  Anderson chavvaria
                </h1>
                <p className="textGrey  text-xs font-base">@andrs</p>
              </div>
            </div>
            <div className="  my-2">
              <h1 className="text-white text-xl font-semibold">
                Modern luxury living space revealed
              </h1>
            </div>
            <div className=" my-2">
              <p className="text-xs textGrey">
                Discover the epitome of luxury living in this modern space.
                Elegance meets comfort with hight ceiling, natural light
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
