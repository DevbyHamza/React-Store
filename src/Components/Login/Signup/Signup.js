import React, { useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { FormSchema } from "./SignupFormSchema";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../cookies";
import { getCookie } from "../cookies";
const Signup = () => {
  const navigate = useNavigate();
  const formInitialValues = {
    name: "",
    password: "",
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formik = useFormik({
    initialValues: formInitialValues,
    validationSchema: FormSchema,
    onSubmit: (values, action) => {
      const existingData = JSON.parse(getCookie("users")) || [];
      // Generate unique ID for the user
      const userId = existingData.length + 1; // Example: Incremental IDs
      existingData.push({
        id: userId,
        name: values.name,
        password: values.password,
      });
      setCookie("users", JSON.stringify(existingData));
      action.resetForm(navigate("/login"));
      window.location.reload();
    },
  });

  return (
    <div>
      <div className="bg-white h-28">
        <Navbar
          textColor="text-black"
          bgColor="bg-white"
          numberbg="bg-black"
          bag={require("../../Navbar/cartbagblack.png")}
          numbertext="text-white"
          user={require("../../Navbar/userblack.png")}
        />
      </div>
      <div className="bg-slate-100 flex flex-col pt-20 pb-20 items-center w-[100%]">
        <div className="bg-white border flex flex-col  mdsm:w-[50%] md:w-[30%] border-slate-300 shadow-2xl">
          <form
            className="p-6 flex flex-col justify-center items-center gap-5"
            onSubmit={formik.handleSubmit}
          >
            <span className="flex flex-col gap-4">
              <label className="font-semibold">Name</label>
              <input
                type="text"
                name="name"
                onBlur={formik.handleBlur}
                value={formik.values.name}
                onChange={formik.handleChange}
                className="md:w-80 border border-slate-400 focus:border-teal focus:outline-none focus:ring-0   h-10"
              />
              {formik.errors.name && formik.touched.name ? (
                <span className="error font-semibold text-red-500">
                  {formik.errors.name}
                </span>
              ) : null}
            </span>
            <span className="flex flex-col gap-2">
              <label className="font-semibold">Password</label>
              <input
                type="password"
                name="password"
                onBlur={formik.handleBlur}
                value={formik.values.password}
                onChange={formik.handleChange}
                className="md:w-80 border border-slate-400 focus:border-teal focus:outline-none focus:ring-0   h-10"
              />
              {formik.errors.password && formik.touched.password ? (
                <span className="error font-semibold text-red-500">
                  {formik.errors.password}
                </span>
              ) : null}
            </span>
            <button
              type="submit"
              className="md:w-[50%] bg-blue-500 text-white font-semibold text-lg  px-6 py-2"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Signup;
