import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { FormSchema } from "./FormSchema";
const CheckOut = () => {
  const cartItems = useSelector((state) => state.cartitems);
  const items = {
    "Direct Bank Transfer":
      "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.",
    "Check Payments":
      "Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.",
    "Cash on Delivery": "Pay with cash upon delivery.",
    " PayPal ":
      " Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.",
  };
  const [selectedItem, setSelectedItem] = useState(
    Object.keys(items)[0] || null
  );

  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const handleRadioChange = (event) => {
    setSelectedItem(event.target.value);
  };
  const formintialvalues = {
    firstname: "",
    lastname: "",
    companyname: "",
    country: "",
    streataddress: "",
    apartment: "",
    town: "",
    state: "",
    postcode: "",
    phonenumber: "",
    email: "",
  };
  const formik = useFormik({
    initialValues: formintialvalues,
    validationSchema: FormSchema,
    onSubmit: (values, action) => {
      action.resetForm();
    },
    
  });

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
        <div className="flex pt-20 w-[100%] gap-10 pb-20  flex-col items-center">
          <div className="text-6xl text-slate-600 font-semibold pb-14">
            Checkout
          </div>
          <div className="w-[78%] flex flex-col gap-2 p-4 border-t-[3px] border-red-800 bg-red-50">
            {formik.errors.firstname && formik.touched.firstname ? (
              <span className="error font-semibold text-black">
                Billing {formik.errors.firstname}
              </span>
            ) : null}
            {formik.errors.lastname && formik.touched.lastname ? (
              <span className="error font-semibold text-black">
                Billing {formik.errors.lastname}
              </span>
            ) : null}
          </div>
          <div className="md:flex w-[100%]   md:w-[80%] ">
            <div className="w-[75%] pr-10 p-4 divide-y-2">
              <div className="text-xl font-semibold pt-4 pb-4">
                Billing Details
              </div>

              <div className="pt-6 pb-6">
                <form className="flex flex-col gap-2">
                  <div className=" flex justify-between gap-12">
                    <span className="flex w-[50%] flex-col gap-2">
                      <label className="font-semibold">First Name</label>
                      <input
                        type="text"
                        name="firstname"
                        onBlur={formik.handleBlur}
                        value={formik.values.firstname}
                        onChange={formik.handleChange}
                        className="w-80 border border-slate-400 focus:border-teal focus:outline-none focus:ring-0   h-10"
                      />
                    </span>
                    <span className="flex w-[50%] flex-col gap-2">
                      <label className="font-semibold">Last Name</label>
                      <input
                        type="text"
                        name="lastname"
                        onBlur={formik.handleBlur}
                        value={formik.values.lastname}
                        onChange={formik.handleChange}
                        className=" w-80 border border-slate-400 focus:border-teal focus:outline-none focus:ring-0   h-10"
                      />
                    </span>
                  </div>
                  <span className="flex w-[100%] flex-col gap-2">
                    <label className="font-semibold">
                      Company Name (Optional)
                    </label>
                    <input
                      type="text"
                      name="companyname"
                      onBlur={formik.handleBlur}
                      value={formik.values.companyname}
                      onChange={formik.handleChange}
                      className="w-[97%] border border-slate-400 focus:border-teal focus:outline-none focus:ring-0   h-10"
                    />
                  </span>
                  <span className="flex w-[100%] flex-col gap-2">
                    <label className="font-semibold">Country</label>
                    <input
                      type="text"
                      name="country"
                      onBlur={formik.handleBlur}
                      value={formik.values.country}
                      onChange={formik.handleChange}
                      className="w-[97%] border border-slate-400 focus:border-teal focus:outline-none focus:ring-0   h-10"
                    />
                  </span>
                  <span className="flex w-[100%] flex-col gap-2">
                    <label className="font-semibold">Street Address</label>
                    <input
                      type="text"
                      name="streataddress"
                      onBlur={formik.handleBlur}
                      value={formik.values.streataddress}
                      onChange={formik.handleChange}
                      placeholder="Street Number House Number"
                      className="w-[97%] p-2 border border-slate-400 focus:border-teal focus:outline-none focus:ring-0   h-10"
                    />
                    <input
                      type="text"
                      placeholder="Apartment number #suit"
                      name="apartment"
                      onBlur={formik.handleBlur}
                      value={formik.values.apartment}
                      onChange={formik.handleChange}
                      className="w-[97%] border border-slate-400 p-2 focus:border-teal focus:outline-none focus:ring-0   h-10"
                    />
                  </span>

                  <span className="flex w-[100%] flex-col gap-2">
                    <label className="font-semibold">Town/City</label>
                    <input
                      type="text"
                      name="twon"
                      onBlur={formik.handleBlur}
                      value={formik.values.town}
                      onChange={formik.handleChange}
                      className="w-[97%] border border-slate-400 focus:border-teal focus:outline-none focus:ring-0   h-10"
                    />
                  </span>
                  <span className="flex w-[100%] flex-col gap-2">
                    <label className="font-semibold">State/Country</label>
                    <input
                      type="text"
                      name="state"
                      onBlur={formik.handleBlur}
                      value={formik.values.state}
                      onChange={formik.handleChange}
                      className="w-[97%] border border-slate-400 focus:border-teal focus:outline-none focus:ring-0   h-10"
                    />
                  </span>
                  <span className="flex w-[100%] flex-col gap-2">
                    <label className="font-semibold">Postcode/Zip</label>
                    <input
                      type="text"
                      name="postcode"
                      onBlur={formik.handleBlur}
                      value={formik.values.postcode}
                      onChange={formik.handleChange}
                      className="w-[97%] border border-slate-400 focus:border-teal focus:outline-none focus:ring-0   h-10"
                    />
                  </span>
                  <span className="flex w-[100%] flex-col gap-2">
                    <label className="font-semibold">Phone Number</label>
                    <input
                      type="text"
                      name="phonenumber"
                      onBlur={formik.handleBlur}
                      value={formik.values.phonenumber}
                      onChange={formik.handleChange}
                      className="w-[97%] border border-slate-400 focus:border-teal focus:outline-none focus:ring-0   h-10"
                    />
                  </span>
                  <span className="flex w-[100%] flex-col gap-2">
                    <label className="font-semibold">Email Address</label>
                    <input
                      type="text"
                      name="email"
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      className="w-[97%] border border-slate-400 focus:border-teal focus:outline-none focus:ring-0   h-10"
                    />
                  </span>
                </form>
              </div>

              <div className="text-sm font-semibold pt-4 pb-4">
                Order Note(optional)
              </div>
            </div>

            <div className="w-[40%] border p-6 border-slate-300">
              <span className="pt-4 pb-4 p-6 text-xl font-semibold">
                Your order
              </span>
              <div className=" p-6 flex divide-y-2 gap-5 flex-col">
                <span className="flex justify-between  pt-4 pb-4 text-lg font-semibold">
                  <span>Product</span>
                  <span>Subtotal</span>
                </span>
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className=" flex  pt-4 pb-4 justify-between items-center"
                  >
                    <span className=" max-w-80">
                      {item.title} x {item.quantity}
                    </span>
                    <span className=" min-w-12">
                      ${item.price * item.quantity}
                    </span>
                  </div>
                ))}

                <span className="flex  pt-4 pb-4 justify-between">
                  <span>Subtotal</span>
                  <span className=" min-w-12">${totalAmount}</span>
                </span>
                <span className="pt-4= pb-4  flex justify-between">
                  <span>Total</span>
                  <span className=" min-w-12">${totalAmount}</span>
                </span>

                <div>
                  {Object.keys(items).map((item, index) => (
                    <div className="" key={index}>
                      <div className="flex gap-4">
                        <input
                          className=""
                          type="radio"
                          id={`item-${index}`}
                          name="selectedItem"
                          value={item}
                          checked={selectedItem === item}
                          onChange={handleRadioChange}
                        />
                        <label htmlFor={`item-${index}`}>{item}</label>
                      </div>
                      {selectedItem === item && (
                        <div className="bg-slate-200 text-sm m-2 p-2">
                          <h3>{items[item]}</h3>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <button className="bg-blue-500 font-semibold w-[100%]   text-[18px] hover:bg-blue-600 text-white py-[14px] ">
                  CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckOut;
