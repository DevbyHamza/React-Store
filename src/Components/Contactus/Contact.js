import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useFormik } from "formik";
import { FormSchema } from "./FormSchema";
const Contact = () => {
  const formintialvalues = {
    name: "",
    subject: "",
    email: "",
    message: "",
  };
  const formik = useFormik({
    initialValues: formintialvalues,
    validationSchema: FormSchema,
    onSubmit: (values, action) => {
      const { name, subject, email, message } = values;
      const newMessage = {
        name,
        subject,
        email,
        message,
      };
      action.resetForm();
      console.log(newMessage);
    },
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar
        textColor="text-white"
        bgColor="bg-cyan-900"
        numberbg="bg-white"
        bag={require("../Navbar/cartbag.png")}
        numbertext="text-black"
        user={require("../Navbar/user.png")}
      />
      <div className="pt-28">
        <div className=" bg-black bg-opacity-25  ">
          <div className="    bg-center bg-Contactbg bg-cover w-[100%] h-[50%]   ">
            <span className=" md:text-6xl   text-2xl bg-black bg-opacity-25  sm:text-3xl font-bold flex flex-col items-center justify-center text-white  p-24 md:p-52">
              Contact Us
            </span>
          </div>
          <div className="  bg-gradient-to-b from-slate-200 to-white flex justify-center flex-col md:p-20 p-8 items-center">
            <div className=" flex flex-col items-center gap-4 w-[100%]">
              <span className="sm:text-lg font-semibold"> Have any queries?</span>
              <span className="sm:text-5xl text-2xl font-semibold">
                We're here to help.
              </span>
              <div className="bg-black w-20 h-[1px]">{""}</div>
            </div>

            <div className="flex justify-center gap-4 pt-10 flex-wrap md:w-[90%] w-[100%]">
              <span className=" bg-white rounded-xl flex flex-col gap-8 items-center justify-center shadow-sm w-72 h-48">
                <span className="flex flex-col justify-center gap-3 items-center">
                  <span className="text-3xl font-semibold">Sales</span>
                  <span className="w-[90%] text-center">
                    Lorem ipsum dolor sit amet he dd adipisicing elit.
                  </span>
                  <span className="text-blue-500 font-semibold">
                    1800 125 4547
                  </span>
                </span>
              </span>
              <span className=" bg-white rounded-xl flex flex-col gap-8 items-center justify-center shadow-sm w-72 h-48">
                <span className="flex flex-col justify-center gap-3 items-center">
                  <span className="text-3xl font-semibold">Marketing</span>
                  <span className="w-[90%] text-center">
                    Lorem ipsum dolor sit amet he dd adipisicing elit.
                  </span>
                  <span className="text-blue-500 font-semibold">
                    1800 125 4547
                  </span>
                </span>
              </span>
              <span className=" bg-white rounded-xl flex flex-col gap-8 items-center justify-center shadow-sm w-72 h-48">
                <span className="flex flex-col justify-center gap-3 items-center">
                  <span className="text-3xl font-semibold">Complaints</span>
                  <span className="w-[90%] text-center">
                    Lorem ipsum dolor sit amet he dd adipisicing elit.
                  </span>
                  <span className="text-blue-500 font-semibold">
                    1800 125 4547
                  </span>
                </span>
              </span>
              <span className=" bg-white rounded-xl flex flex-col gap-8 items-center justify-center shadow-sm w-72 h-48">
                <span className="flex flex-col justify-center gap-3 items-center">
                  <span className="text-3xl font-semibold">Returns</span>
                  <span className="w-[90%] text-center">
                    Lorem ipsum dolor sit amet he dd adipisicing elit.
                  </span>
                  <span className="text-blue-500 font-semibold">
                    return@gmail.com
                  </span>
                </span>
              </span>
            </div>

            <div className="md:flex sm:p-20 p-4 w-[100%]">
              <div className="md:w-[50%] w-[100%] flex flex-col gap-8 pt-24  ">
                <div className="flex flex-col">
                  <span className="font-bold">Don't be a stranger!</span>
                  <span className="sm:text-5xl text-3xl font-semibold">
                    You tell us.We listen.
                  </span>
                </div>
                <span className="md:w-[85%] w-[100%]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dignissimos doloremque ratione vel ullam. Veritatis omnis
                  nostrum vitae expedita fugiat sed ullam dignissimos!
                </span>
              </div>
              <div className="md:w-[50%]  mt-20  pb-20  rounded-xl shadow-lg bg-white">
                <form
                  onSubmit={formik.handleSubmit}
                  className="flex pt-10 flex-col gap-1 justify-start items-center"
                >
                  <div className="sm:w-[80%] ">
                    <input
                      type="text"
                      name="name"
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      placeholder="NAME"
                      className="w-[100%] border border-slate-400 focus:border-teal focus:outline-none focus:ring-0  p-2 h-12"
                    />
                    <br />
                    {formik.errors.name && formik.touched.name ? (
                      <span className="error text-red-600">
                        {formik.errors.name}
                      </span>
                    ) : null}
                    <br />
                  </div>
                  <div className="sm:w-[80%] ">
                    <input
                      type="text"
                      name="subject"
                      onBlur={formik.handleBlur}
                      value={formik.values.subject}
                      onChange={formik.handleChange}
                      placeholder="SUBJECT"
                      className="w-[100%] border border-slate-400 focus:border-teal focus:outline-none focus:ring-0 p-2 h-12"
                    />
                    <br />
                    {formik.errors.subject && formik.touched.subject ? (
                      <span className=" error text-red-600">
                        {formik.errors.subject}
                      </span>
                    ) : null}
                    <br />
                  </div>
                  <div className="sm:w-[80%] ">
                    <input
                      type="email"
                      name="email"
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      placeholder="EMAIL"
                      className="w-[100%] border border-slate-400 focus:border-teal focus:outline-none focus:ring-0 p-2 h-12"
                    />
                    <br />
                    {formik.errors.email && formik.touched.email ? (
                      <span className="error text-red-600">
                        {formik.errors.email}
                      </span>
                    ) : null}
                    <br />
                  </div>
                  <div className="sm:w-[80%] ">
                    <textarea
                      type="text"
                      name="message"
                      onBlur={formik.handleBlur}
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      placeholder="MESSAGE"
                      className="w-[100%] border border-slate-400 focus:border-teal focus:outline-none focus:ring-0 p-2 h-48"
                    />
                    <br />
                    {formik.errors.message && formik.touched.message ? (
                      <span className="error text-red-600">
                        {formik.errors.message}
                      </span>
                    ) : null}
                    <br />
                  </div>
                  <div className="w-[100%] flex justify-center md:w-[80%]">
                    <button
                      type="submit"
                      className=" bg-blue-500 font-semibold p-2 text-1xl md:text-[16px] sm:w-[35%] hover:bg-blue-600   text-white  py-[9.5px] md:px-5"
                    >
                      SEND MESSAGE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Contact;
