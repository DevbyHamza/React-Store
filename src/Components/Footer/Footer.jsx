import React from "react";
import facebook from "./facebook.png";
import google from "./google.png";
import instagram from "./instagram.png";
import twitter from "./twitter.png";
import youtube from "./youtube.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="flex divide-y-2 bg-white flex-col w-[100%] justify-center items-center">
      <div className=" sm:text-3xl font-semibold sm:p-12 p-6 sm:w-[90%] ">
        <span className=" hover:text-blue-500 text-xl hover:cursor-pointer">
          SALE UP TO 70% OFF FOR ALLL CLOTHES & FASION ITEMS , ON ALL BRANDS
        </span>
      </div>

      <div className=" md:flex-row flex flex-col gap-4 sm:w-[80%] pb-20 pt-16  ">
        <span className="left  flex flex-col justify-center items-center sm:items-start gap-11 md:pr-20 ">
          <span className=" text-4xl font-extrabold italic"> DNK</span>
          <span className=" sm:text-2xl flex justify-center font-semibold">
            The best look anytime, anywhere.
          </span>
        </span>
        <span className="right md:flex gap-24 sm:pl-20">
          <span className="flex flex-col gap-4">
            <span className=" text-2xl font-medium">For Her</span>
            <span className="flex flex-col text-gray-500  gap-1">
              <span>Women Jeans</span>
              <span>Tops and Shirts</span>
              <span>Women Jackets</span>
              <span>Heels and Flats</span>
              <span>Women Accessories</span>
            </span>
          </span>
          <span className="flex flex-col gap-4">
            <span className=" text-2xl font-medium">For Him</span>
            <span className="flex flex-col text-gray-500  gap-1">
              <span>Men Jeans</span>
              <span>Men Shirts</span>
              <span>Men Shoes</span>
              <span>Men Accessories</span>
              <span>Men Jackets</span>
            </span>
          </span>
          <span className="flex gap-5 flex-col">
            <span className="text-2xl font-semibold">Subcribe</span>
            <span>
              <input
                className=" border-2   focus:border-teal focus:outline-none focus:ring-0 p-2 w-60"
                placeholder="Your email address"
                type="email"
                
              />
            </span>
            <button className=" bg-blue-500 font-semibold p-2 text-[16px] w-[60%] hover:bg-blue-600   text-white  py-[9.5px] px-5">
              SUBSCRIBE
            </button>
          </span>
        </span>
      </div>

      <div className="md:flex justify-between items-center sm:p-14 p-4 w-[100%]  md:w-[85%]">
        <div>Copyright © 2024 Brandstore. Powered by Brandstore.</div>
        <div className="flex  pt-10 gap-10">
          <Link to="/form" ><img src={facebook} className="h-5 hover:cursor-pointer " alt="" /></Link>
         <Link to = "/form2"> <img src={instagram} className="h-5 hover:cursor-pointer" alt="" /></Link>
         <Link to = "/form3"> <img src={youtube} className="h-5 hover:cursor-pointer" alt="" /></Link>
          <img src={twitter} className="h-5 hover:cursor-pointer" alt="" />
          <img src={google} className="h-5 hover:cursor-pointer" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
