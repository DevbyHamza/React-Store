import React from "react";

const Specialoffers = () => {
  return (
    <div className="md:flex flex flex-col md:flex-row gap-4 h- pt-2 pb-28">
      <div className=" bg-LADIESTOP bg-cover  h-96   ">
        <div className=" sm:w-[294px] sm:h-[385px] h-96 flex gap-4 bg-black bg-opacity-50 justify-end flex-col p-6 pb-8">
          <span className="text-white font-medium text-xl">
            20% Off On Tank Tops
          </span>
          <span className="text-white font-normal  text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            molestiae possimus.
          </span>
          <button className="primarybtn w-1/2">SHOP NOW</button>
        </div>
      </div>
      <div className="bg-Eyewearbg bg-cover h-96 ">
        <div className=" sm:w-[294px] sm:h-[385px] flex gap-4 h-96 bg-black bg-opacity-50 justify-end flex-col p-6 pb-8">
          <span className="text-white font-medium text-xl">
            Latest Eyewear For You
          </span>
          <span className="text-white font-normal text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            molestiae possimus.
          </span>
          <button className="primarybtn w-1/2">SHOP NOW</button>
        </div>
      </div>
      <div className=" bg-cover bg-shoes h-96  ">
        <div className=" sm:w-[294px] sm:h-[385px] flex gap-4 h-96 bg-black bg-opacity-50 justify-end flex-col p-6 pb-8">
          <span className="text-white font-medium text-xl">
            Let's Lorem Suits Up!
          </span>
          <span className="text-white font-normal text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            molestiae possimus.
          </span>
          <button className="primarybtn w-1/2">CHECK OUT</button>
        </div>
      </div>
    </div>
  );
};

export default Specialoffers;
