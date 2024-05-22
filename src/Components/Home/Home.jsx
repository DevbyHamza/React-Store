import React from "react";

const Home = () => {
  return (
    <div className="flex items-center sm:pt-8 mdsm:w-[90%] md:pt-44  md:w-[90%] justify-center ">
      <div className="p-2 md:w-[80%] flex md:gap-10 mdsm:gap-5 sm:gap-4 flex-col gap-2">
        <span className=" font-semibold md:text-7xl mdsm:text-4xl md:w-[100%] mdsm:w-[70%] lg:w-[60%] sm:text-2xl text-xl text-white ">
          Raining Offers For Hot Summer!
        </span>
        <span className="text-white font-medium text-sm md:text-2xl">
          25% Off On All Products
        </span>
        <span className="  md:flex-row flex flex-col mdsm:gap-5 sm:gap-2 md:gap-4 gap-1">
          <button className="primarybtn mdsm:w-48 md:py-3  md:text-sm md:px-8 hover:animate-pulse ">
            SHOP NOW
          </button>
          <button className=" border-2 hover:animate-pulse mdsm:w-48 border-white bg-transparent text-sm font-semibold hover:bg-white hover:text-black text-white md:py-3 md:px-8 py-2 px-5">
            FIND MORE
          </button>
        
        </span>
      </div>
    </div>
  );
};

export default Home;
