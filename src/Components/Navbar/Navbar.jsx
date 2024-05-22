import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Slice/userSlice";
import { removefromcart } from "../../Slice/AddtoCartSlice";
import { setCookie, getCookie } from "../Login/cookies";
import userblack from "./userblack.png";
import { toast } from "react-toastify";

const Navbar = ({ textColor, bgColor, bag, user, numberbg, numbertext }) => {
  const cartCount = useSelector((state) => state.cartitems.length);
  const cartitems = useSelector((state) => state.cartitems);

  const username = useSelector((state) => state.users?.username);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const totalAmount = cartitems.reduce((total, cartitems) => {
    return total + cartitems.price * cartitems.quantity;
  }, 0);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };


// let delayResend = "120.5"
//   const [delay, setDelay] = useState(+delayResend);
//   const minutes = Math.floor(delay / 60);
//   const seconds = Math.floor(delay % 60);
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setDelay(delay - 1);
//     }, 1000);

//     if (delay === 0) {
//       clearInterval(timer);
//     }

//     return () => {
//       clearInterval(timer);
//     };
//   });


  const handleLogout = () => {
    dispatch(logout());
    const existingData = JSON.parse(getCookie("carts")) || [];
    const userIndex = existingData.findIndex(
      (data) => data.username === username?.name
    );
    if (userIndex !== -1) {
      existingData.splice(userIndex, 1);
    }
    const updatedCart = {
      username: username?.name,
      cart: cartitems,
    };
    existingData.push(updatedCart);
    setCookie("carts", JSON.stringify(existingData));
    window.location.reload();
    toast.warn(`${username.name} logout`);
  };
  const handleRemove = (id) => {
    dispatch(removefromcart(id));
  };

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = ""; // Allow scrolling
    }
    return () => {
      document.body.style.overflow = ""; // Clean up, allow scrolling
    };
  }, [isCartOpen]);

  return (
    <>
      <div className=" fixed w-[100%] shadow-lg  z-50   ">
        {/* <div className="flex justify-center items-center text-red-400 bg-black gap-7" > <span className="text-2xl font-semibold">
         Special Offer !  80% Off On All Product </span> <span>Time Left:{minutes}:{seconds}</span></div> */}
        <div
          className={`backdrop-blur-lg flex nav justify-between sm:flex pt-4 pb-4 md:items-end ${bgColor}`}
        >
          <div className="leftnav p-5 p-b pl-7 flex flex-col lg:flex-row lg:gap-14 items-center">
            <Link
              to="/"
              className={`font-extrabold sm:text-4xl italic  ${textColor}`}
            >
              DNK
            </Link>

            <span
              className={`p-1 hidden md:visible md:flex  text-xs md:text-lg gap-4 font-bold md:font-semibold ${textColor} hover:cursor-pointer`}
            >
              <Link
                to="/All"
                class="before:ease relative   overflow-hidden   before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-white before:transition-all before:duration-300 hover:text-black  hover:before:-rotate-180 rounded-md"
              >
                <span class="relative z-10 flex h-12 w-32 justify-center items-center">
                  EVERYTHING
                </span>
              </Link>
              <Link
                to="/women"
                class="before:ease relative   overflow-hidden before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-white before:transition-all before:duration-300 hover:text-black  hover:before:-rotate-180 rounded-md"
              >
                <span class="relative z-10 flex h-12 w-28 justify-center items-center">
                  WOMEN
                </span>
              </Link>
              <Link
                to="/men"
                class="before:ease relative   overflow-hidden before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-white before:transition-all before:duration-300 hover:text-black  hover:before:-rotate-180 rounded-md"
              >
                <span class="relative z-10 flex h-12 w-28 justify-center items-center">
                  MEN
                </span>
              </Link>
              <Link
                to="/electronic"
                class="before:ease relative overflow-hidden before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-white before:transition-all before:duration-300 hover:text-black  hover:before:-rotate-180 rounded-md"
              >
                <span class="relative z-10 flex h-12 w-32 justify-center items-center">
                  ELECTRONICS
                </span>
              </Link>
            </span>
          </div>
          <div
            className={`rightnav text-sm justify-center items-center align-middle  p-5 pr-7 flex flex-col gap-2  sm:flex-row   md:flex sm:gap-6 font-semibold ${textColor} hover:cursor-pointer `}
          >
            <div className=" hidden md:visible md:flex gap-4 ">
              <Link
                to="/about"
                class="before:ease relative overflow-hidden before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-white before:transition-all before:duration-300 hover:text-black  hover:before:-rotate-180 rounded-md"
              >
                <span class="relative z-10 flex h-10 w-20 justify-center items-center">
                  ABOUT US
                </span>
              </Link>
              <Link
                to="/contact"
                class="before:ease relative overflow-hidden before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-white before:transition-all before:duration-300 hover:text-black  hover:before:-rotate-180 rounded-md"
              >
                <span class="relative z-10 flex h-10 w-24 justify-center items-center">
                  CONTACT US
                </span>
              </Link>
            </div>
            <span className="flex relative gap-2 sm:gap-4">
              <span className="w-14">${totalAmount.toFixed(2)}</span>
              <img
                width={20}
                height={20}
                src={bag}
                alt="shopping-bag--v1"
                onClick={toggleCart}
              />
              <span
                className={`${numberbg} text-center rounded-lg absolute left-20 bottom-4 ${numbertext} w-4 h-4 text-xs`}
              >
                {cartCount}
              </span>
              <span onClick={toggleMenu} className="visible md:hidden">
                MENU
              </span>
            </span>

            {username && username !== null ? (
              <span className=" mdsm:flex gap-2 hidden mdsm:visible">
                <span className="flex justify-center items-center">{username.name}</span>
                <button
                  onClick={handleLogout}
                  class="before:ease relative overflow-hidden before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-white before:transition-all before:duration-300 hover:text-black  hover:before:-rotate-180 rounded-md"
                >
                  <span class="relative z-10 flex h-10 w-24 justify-center items-center">
                    Logout
                  </span>
                </button>
                <Link
                  to="/addproduct"
                  class="before:ease relative overflow-hidden before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-white before:transition-all before:duration-300 hover:text-black  hover:before:-rotate-180 rounded-md"
                >
                  <span class="relative z-10 flex h-10 w-24 justify-center items-center">
                    Add Product
                  </span>
                </Link>
              </span>
            ) : (
              <Link
                to="/Login"
                className=" hidden md:visible md:flex gap-4 justify-center items-center"
              >
                Login
                <img width={25} height={25} src={user} alt="" />
              </Link>
            )}
          </div>
        </div>

        {isCartOpen && (
          <div className="bg-white h-1vh divide-y-2 text-black top-0 sm:bottom-0 bottom-0 right-0 md:w-[35%] sm:w-[60%] w-[100%] z-50 fixed">
            <div className="flex p-4 text-base font-semibold justify-between">
              Shopping Cart
              <img
                width={30}
                height={15}
                src="https://img.icons8.com/ios/50/1A1A1A/delete-sign--v1.png"
                className="hover:cursor-pointer"
                alt="shopping-bag--v1"
                onClick={toggleCart} // Ensure onClick is bound to toggleCart
              />
            </div>
            <div className="h-[60%] overflow-y-auto  divide-y-2">
              {cartitems.length > 0 ? (
                cartitems.map((item, index) => (
                  <div key={index} className="flex p-4 gap-4 h-24">
                    <div className="w-[20%]">
                      <img
                        className="h-16 w-16"
                        src={item.image}
                        alt={item.title}
                      />
                    </div>
                    <div className="w-[70%]">
                      <div>{item.title}</div>
                      <div>
                        {item.quantity} x ${item.price}
                      </div>
                    </div>
                    <div
                      className=" flex justify-center items-center hover:cursor-pointer"
                      onClick={() => handleRemove(item.id)}
                    >
                      <img
                        className=""
                        height={15}
                        width={20}
                        src="https://img.icons8.com/ios/50/1A1A1A/delete-sign--v1.png"
                        alt="remove"
                      />
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex justify-center items-center h-24">
                  No items in cart
                </div>
              )}
            </div>
            <div className=" flex justify-between p-4">
              <span className="">SubTotal : </span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex  p-2 flex-col gap-2">
              <Link
                to="/cart"
                className="bg-blue-500 font-semibold flex justify-center text-[18px] hover:bg-blue-600 text-white py-[14px] "
              >
                VIEW CART
              </Link>
              <Link
                to="/checkout"
                className="bg-blue-500 font-semibold flex justify-center text-[18px] hover:bg-blue-600 text-white py-[14px] "
              >
                CHECKOUT
              </Link>
            </div>
          </div>
        )}
        {isMenuOpen && (
          <div className="bg-slate-100 divide-y-2 text-black top-0 bottom-0 right-0 left-10 sm:left-40 mdsm:left-64 flex flex-col gap-8  z-50 fixed">
            <div>
              <img
                width={30}
                height={15}
                src="https://img.icons8.com/ios/50/1A1A1A/delete-sign--v1.png"
                className="hover:cursor-pointer "
                alt="shopping-bag--v1"
                onClick={toggleMenu} // Ensure onClick is bound to toggleCart
              />
            </div>
            <div>
              {username && username !== null ? (
                <span className=" flex justify-between p-4 font-bold gap-2">
                  {username.name}
                  <button onClick={handleLogout}>Logout</button>
                  <Link  to = "/addproduct"> Add Product </Link>
                </span>
              ) : (
                <div className="flex p-4 font-bold  justify-between items-center">
                  <img width={25} height={25} src={userblack} alt="" />
                  <Link to="/Login">Login</Link>
                  
                </div>
              )}
            </div>
            <div className="flex divide-y-2 flex-col gap-4">
              <div className="flex justify-center pt-4 ">EVERYTHING</div>
              <div className="flex justify-center pt-4">Women</div>
              <div className="flex justify-center pt-4">MEN</div>
              <div className="flex justify-center pt-4">ACCESSORIES</div>
            </div>

            <div className="divide-y-2 ">
              <Link to="/contact" className="flex justify-center pt-4 pb-4 ">
                Contact Us
              </Link>
              <Link to="/about" className="flex justify-center pt-4 pb-4 ">
                About Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
