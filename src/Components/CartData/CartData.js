import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import { updateCartItemQuantity } from "../../Slice/AddtoCartSlice";
import { useDispatch } from "react-redux";
import { removefromcart } from "../../Slice/AddtoCartSlice";
import { Link } from "react-router-dom";
import remove from "./REMOVE.png";
import { toast } from "react-toastify";

const CartData = () => {
  const dispatch = useDispatch();
  const cartitems = useSelector((state) => state.cartitems);

  const handleQuantityChange = (index, e) => {
    const newQuantity = parseInt(e.target.value);
    dispatch(
      updateCartItemQuantity({
        productId: cartitems[index].id,
        quantity: newQuantity,
      })
    );
    toast.success("Quantity changed");
  };
  const handleRemove = (id) => {
    dispatch(removefromcart(id));
    toast.error("Product removed from cart");
  };

  const totalAmount = cartitems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="bg-white h-28">
        <Navbar
          textColor="text-black"
          bgColor="bg-white"
          numberbg="bg-black"
          bag={require("../Navbar/cartbagblack.png")}
          numbertext="text-white"
          user={require("../Navbar/userblack.png")}
        />
      </div>
      <div className="bg-slate-100 w-[100%] flex justify-center">
        <div className="flex pt-20 w-[100%] gap-10 pb-20 justify-center flex-col items-center">
          <div className="text-6xl text-slate-600 font-semibold pb-14">
            Cart
          </div>
          <div className="w-[78%] border border-neutral-300 shadow-sm">
            <div className="border border-neutral-300 flex bg-zinc-50 h-12 p-2 w-[100%]">
              <div className="w-[50%] flex font-semibold justify-center text-lg">
                Product
              </div>
              <div className="sm:flex md:text-lg font-semibold hidden sm:visible sm-gap-2 w-[70%]  md:w-[55%] justify-around">
                <div>Price</div>
                <div>Quantity</div>
                <div>Subtotal</div>
              </div>
            </div>

            {cartitems.map((item, index) => (
              <div
                key={index}
                className="border flex  flex-col p-2 sm:flex-row items-center w-[100%] border-neutral-300 sm:h-24"
              >
                <div className="flex w-[50%] flex-col sm:flex-row justify-center  md:gap-10 gap-2 items-center">
                  <div
                    className=" md:h-15 md:w-15  hover:cursor-pointer"
                    onClick={() => handleRemove(item.id)}
                  >
                    <img src={remove} alt="remove" />
                  </div>
                  <img
                    className="h-16 w-16"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="sm:w-[50%] sm:text-xs md:text-base ">{item.title}</div>
                </div>
                <div className="flex w-[50%] sm:justify-around sm:flex-row  flex-col gap-5 sm:gap-2 ">
                  <div className="w-[20%] flex gap-20">
                    {" "}
                    <span className="font-bold sm:hidden">Price:</span>${item.price}
                  </div>
                  <div className="w-[20%] flex gap-10 ">
                    <span className="font-bold sm:hidden">Quantity:</span>
                    <input
                      className="w-14 pl-5 h-[100%] border border-slate-400 focus:border-teal focus:outline-none focus:ring-0"
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(index, e)}
                    />
                  </div>
                  <div className="w-[15%] flex gap-20 ">
                    <span className="font-bold sm:hidden">Total:</span>
                    {(item.quantity * item.price).toFixed(3)}
                  </div>{" "}
                </div>
              </div>
            ))}
            <div className="border border-neutral-300 w-[100%] flex flex-col md:flex-row gap-2 p-3 justify-between md:h-20">
              <div className="flex flex-col md:flex-row gap-2">
                <input
                  type="text"
                  className="m-2 p-2 border border-slate-400 focus:border-teal focus:outline-none focus:ring-0"
                  placeholder="Coupon Code"
                />
                <button className="bg-blue-500 font-semibold p-2 md:text-[16px] hover:bg-blue-600 text-white md:py-[10px] md:px-8">
                  Apply Coupon
                </button>
              </div>
              <div className="">
                <button className="bg-blue-500 w-[100%]  font-semibold p-2 text-[16px] hover:bg-blue-600 text-white md:py-[8px] md:px-5">
                  UPDATE CART
                </button>
              </div>
            </div>
          </div>
          <div className="flex md:w-[78%]">
            <div className="md:w-[60%] "></div>
            <div className="md:w-[55%] w-[280px] sm:[400px] border border-neutral-300">
              <div className="text-xl font-semibold border h-12 p-3 bg-zinc-50 border-neutral-300">
                Cart Totals
              </div>
              <div className="p-6 gap-5 divide-y-2 flex flex-col">
                <div className="md:pl-4 w-[100%] pt-2 flex justify-between">
                  <span className=" md:w-[40%]">Subtotal:</span>
                  <span> ${totalAmount.toFixed(3)}</span>
                </div>
                <div className="md:pl-4 w-[100%] pt-2 flex justify-between">
                  <span className=" md:w-[40%]">Total:</span>
                  <span> ${totalAmount.toFixed(3)}</span>
                </div>

                <span className="pt-4">
                  <Link
                    to="/checkout"
                    className="bg-blue-500 font-semibold flex justify-center text-[18px] hover:bg-blue-600 text-white py-[14px] "
                  >
                    CHECKOUT
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartData;
