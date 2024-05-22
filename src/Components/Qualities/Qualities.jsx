import React from "react";
import world from "./world.png"
import bestquality from "./quality.png"
import offers from "./deals.png"
import lock from "./secure.png"
const Qualities = () => {
  return (
    <div className="flex p-16 flex-col md:flex-row gap-10 pb-36 justify-center items-center w-[100%]">
      <div className="flex flex-col gap-4 justify-center items-center">
        <span><img src={world} alt=""className="w-20" /></span>
        <span className=" md:text-lg font-semibold">World Wide Shiping</span>
        <span className=" text-center text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
          aspernatu
        </span>
      </div>
      <div className="flex flex-col gap-4  justify-center items-center">
        <span><img src={bestquality} alt=""className="w-20" /></span>
        <span className=" text-lg font-semibold">Best Quality</span>
        <span className=" text-center  text-sm lin" >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
          aspernatu
        </span>
      </div>
      <div className="flex flex-col gap-4   justify-center items-center">
        <span><img src={offers} alt=""className="w-20" /></span>
        <span className=" text-lg font-semibold">Best Offers</span>
        <span className=" text-center text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
          aspernatu
        </span>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center">
        <span><img src={lock} alt=""className="w-20" /></span>
        <span className=" text-lg font-semibold">Secure Payment</span>
        <span className=" text-center text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
          aspernatu
        </span>
      </div>

    </div>
  );
};

export default Qualities;
