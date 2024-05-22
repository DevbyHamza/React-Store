import React from "react";

const Limitedtime = () => {
  return (
    <div className="sm:pb-80 pt-2 md:pl-24 pl-2 pb-12 pr-26 md:pr-16 sm:pr-2 w-[100%]">
      <div className="flex flex-col gap-2 mdsm:p-2  mdsm:gap-6 md:gap-6 md:justify-end md:w-[48%] md:h-96 text-white">
        <span className=" font-semibold md:text-xl  text-sm">Limited Time Offer</span>
        <span className="md:text-[42px] mdsm:text-2xl sm:text-lg sm:font-bold">Special Edition</span>
        <span className=" sm:text-sm mdsm:w-[50%] md:w-[100%] mdsm:text-base text-xs ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus,
          soluta. Ipsum quo, minima sequi provident delectus ullam vel.
        </span>
        <span className="sm:font-bold  text-sm sm:text-base">
          Buy This T-shirt At 20% Discount, Use Code OFF20
        </span>
        <span className=" sm:pt-4 pt-2">
          <button className="primarybtn sm:w-[25%] w-[50%] sm:h-[45px]">SHOP NOW</button>{" "}
        </span>
      </div>
    </div>
  );
};

export default Limitedtime;
