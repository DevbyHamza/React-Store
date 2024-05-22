import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import arrowtop from "./arrowhead-up.png";
// import ChatBot from 'react-chatbotify'
// import bot from"./chat-bot.png";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./Slice/ProductSlice";
import "./App.css"
import { fetchCountries} from "./Slice/countrySlice";
// import { useEffect, useState } from "react";
const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCountries());
  }, [dispatch]);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  let scrollPercentage = () => {
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    scrollProgress.style.background = `conic-gradient(#008fff ${scrollValue}%, #c0c0ff ${scrollValue}%)`;
  };

  window.onscroll = scrollPercentage;
  window.onload = scrollPercentage;
  // const flow = {
  //   start: {
  //     message: "What is your age?",
  //     path: "end"
  //   },
  //   end: {
  //     message: (params) => `I see you are ${params.userInput}!`,
  //     chatDisabled: true
  //   }
  // }
  // const options = {
  //   isOpen: false,
  //   theme: {
  //     primaryColor: '#42b0c5',
  //     secondaryColor: '#491d8d',
  //     fontFamily: 'Arial, sans-serif',
  //   },
  //   tooltip: {
  //     mode: "NEVER",
  //     text: ""},

  //     chatButton: {
  //       icon: bot,
  //     },

  // };

  return (
    <>
      {/* <ChatBot options={options} flow={flow}/> */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        limit={4}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Bounce}
      />
      <button
        id="progress"
        className="fixed  bottom-28 z-20 right-8 font-bold py-4 px-4 rounded-full shadow-slate-900 shadow-md"
        onClick={scrollToTop}
      >
        <img width={20} height={20} src={arrowtop} alt="" />{" "}
      </button>

      <div className="">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
