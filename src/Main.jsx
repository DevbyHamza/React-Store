import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Slider from "./Components/Slider/Slider";
import Specialoffers from "./Components/SpecialOffers/Specialoffers";
import Featuredproduct from "./Components/FeaturedProduct/Featuredproduct";
import Limitedtime from "./Components/LimitedTime/Limitedtime";
import Qualities from "./Components/Qualities/Qualities";
import Footer from "./Components/Footer/Footer";
import { useEffect } from "react";
import sample from "./mainback.mp4";
import "./main.css"
function Main() {
  useEffect(() => { 
    window.scrollTo(0, 0);
    window.addEventListener('scroll', reveal);
  
    function reveal() {
      var reveals = document.querySelectorAll('.reveal');
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 1  ;
        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add('active');
        } else {
          reveals[i].classList.remove('active');
        }
      }
    }
  
    // Call reveal initially to handle elements already in view
    reveal();
  
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', reveal);
    };
  }, []);



  return (
    <>
      <Navbar
        textColor="text-white"
        bgColor="bg-black"
        numberbg="bg-white"
        bag={require("../src/Components/Navbar/cartbag.png")}
        numbertext="text-black"
        user={require("../src/Components/Navbar/user.png")}
      />
      <div className="pt-24  ">
        <div className="">
          <video
            autoPlay
            loop
            muted
            src={sample}
            className="absolute w-[100%] mdsm:h-[300px]  sm:h-[250px] md:w-full h-[202px] md:h-[510px] lg:h-screen  object-cover"
          ></video>
        </div>
        <div className=" relative  bg-black w-[100%] md:h-[100%] h-[200px]] mdsm:h-[300px] lg:h-screen  bg-opacity-40 ">
          <div className=" reveal  z-40 w-[100%] sm:h-[250px] mdsm:h-[300px] h-[202px] md:h-[100%] p-2   ">
            <Home />
          </div>
        </div>
        <div className="bg-white reveal flex flex-col  p-2 justify-center items-center">
          <Slider />
          <Specialoffers />
        </div>
        <div className="bg-slate-100 flex reveal flex-col justify-center items-center">
          <Featuredproduct />
          <div className="md:bg-fixed  bg-specialoffer bg-cover mdsm:h-[350px]   sm:bg-cover bg-no-repeat md:bg-cover md:w-[85%] sm:h-[250px] md:h-[500px]">
            <Limitedtime />
          </div>
          <div className="reveal">
          <Qualities />
          </div>
        </div>
        <div className="flex reveal   flex-col justify-center items-center">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Main;