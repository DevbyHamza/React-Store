import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import workplace from "./workplace.jpg";
import staf from "./staf.jpg";
import facebook from "../Footer/facebook.png";
import instagram from "../Footer/instagram.png";
import twitter from "../Footer/twitter.png";
import youtube from "../Footer/youtube.png";
import Qualities from "../Qualities/Qualities";
import Footer from "../Footer/Footer";
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
     <Navbar textColor="text-white" bgColor="bg-cyan-900" numberbg="bg-white" bag={require("../Navbar/cartbag.png")} numbertext="text-black" user = {require("../Navbar/user.png")}  />
      <div className="pt-28" >
        <div className="   bg-Aboutusbg  bg-center  bg-cover w-[100%] h-[50%]   ">
          <span className=" md:text-6xl   text-2xl  sm:text-3xl font-bold flex flex-col items-center justify-center text-white  p-24 md:p-52">
            About Us
          </span>
        </div>
        <div className="bg-slate-100 flex  flex-col items-center justify-center  ">
          <div className="md:w-[90%] lg:flex m-4 sm:m-16  bg-white">
            <span className="lg:w-[50%] flex p-4 sm:p-8  md:p-20 justify-center gap-12 flex-col">
              <div className="bg-blue-500 w-20 h-1">{""}</div>
              <span className=" md:text-5xl sm:text-2xl text-1xl font-semibold">Who We Are </span>
              <span className=" sm:text-base text-xs w-[100%] md:w-[95%]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptate esse enim delectus rerum labore obcaecati incidunt!
                Dignissimos, in. Officia, nesciunt?Lorem ipsum dolor sit amet
                anjs ajks .
              </span>
            </span>
            <span className="w-[50%]  ">
              <img src={workplace} className="h-full" alt="" />
            </span>
          </div>
          <div className="pt-24 pb-24 bg-white  w-[100%]  flex  justify-center items-center ">
            <div className="flex justify-center flex-col w-[100%] md:w-[51%] gap-4 items-center">
              <div className="bg-blue-500 w-20 h-1">{""}</div>
              <span className=" text-xl font-semibold">A Few Words About</span>
              <span className="text-5xl font-semibold ">Our Team</span>
              <span className="p-4 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.d
                quisquam minus ndis andae minima fugiat necessitatibus et libero
                dolorem, amet aut, voluptatibus eaque.
              </span>
              <div className="flex justify-center gap-6 w-[100%] flex-wrap">
                <span className=" bg-slate-100 rounded flex flex-col gap-8 items-center justify-center shadow-sm w-52 h-60">
                  <img src={staf} className="h-24 rounded-full w-24" alt="" />
                  <span className="flex flex-col justify-center items-center">
                    <span className="text-xl font-semibold">Hussan</span>
                    <span>Founder - CEO</span>
                  </span>
                </span>
                <span className=" bg-slate-100 rounded flex flex-col gap-8 items-center justify-center shadow-sm w-52 h-60">
                  <img src={staf} className="h-24 rounded-full w-24" alt="" />
                  <span className="flex flex-col justify-center items-center">
                    <span className="text-xl font-semibold">Hussan</span>
                    <span>Founder - CEO</span>
                  </span>
                </span>
                <span className=" bg-slate-100 rounded flex flex-col gap-8 items-center justify-center shadow-sm w-52 h-60">
                  <img src={staf} className="h-24 rounded-full w-24" alt="" />
                  <span className="flex flex-col justify-center items-center">
                    <span className="text-xl font-semibold">Hussan</span>
                    <span>Founder - CEO</span>
                  </span>
                </span>
                <span className=" bg-slate-100 rounded flex flex-col gap-8 items-center justify-center shadow-sm w-52 h-60">
                  <img src={staf} className="h-24 rounded-full w-24" alt="" />
                  <span className="flex flex-col justify-center items-center">
                    <span className="text-xl font-semibold">Hussan</span>
                    <span>Founder - CEO</span>
                  </span>
                </span>
                <span className=" bg-slate-100 rounded flex flex-col gap-8 items-center justify-center shadow-sm w-52 h-60">
                  <img src={staf} className="h-24 rounded-full w-24" alt="" />
                  <span className="flex flex-col justify-center items-center">
                    <span className="text-xl font-semibold">Hussan</span>
                    <span>Founder - CEO</span>
                  </span>
                </span>
                <span className=" bg-slate-100 rounded flex flex-col gap-8 items-center justify-center shadow-sm  w-52 h-60">
                  <img src={staf} className="h-24 rounded-full w-24" alt="" />
                  <span className="flex flex-col justify-center items-center">
                    <span className="text-xl font-semibold">Hussan</span>
                    <span>Founder - CEO</span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="  bg-fixed bg-cover flex justify-center items-center bg-Aboutusbg2">
          <span className=" flex bg-slate-100 md:pt-36  md:pb-36 pb-20 pt-20 md:w-[30%] w-[80%] m-16 md:m-0 flex-col justify-center items-center gap-10">
            <div className="bg-blue-500 w-20 h-1">{""}</div>
            <div className=" justify-center md:text-5xl text-2xl font-semibold ">Follow Us</div>
            <div className="flex justify-center gap-4 md:gap-7">
              <img
                src={facebook}
                className="h-5  hover:cursor-pointer "
                alt=""
              />
              <img
                src={instagram}
                className="h-5 hover:cursor-pointer"
                alt=""
              />
              <img src={youtube} className="h-5 hover:cursor-pointer" alt="" />
              <img src={twitter} className="h-5 hover:cursor-pointer" alt="" />
            </div>
          </span>
        </div>
        <div className="bg-white">
          <Qualities />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
