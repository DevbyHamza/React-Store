import React , {useEffect} from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { FormSchema } from "./loginformSchema";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { getCookie } from "../cookies";
import { loginSuccess } from "../../../Slice/userSlice";
import { useDispatch } from "react-redux";
import { addtocart } from "../../../Slice/AddtoCartSlice";
import { toast } from "react-toastify";
// import { addtocart } from "../../../Slice/AddtoCartSlice";
const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formInitialValues = {
    name: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: formInitialValues,
    validationSchema: FormSchema,
    onSubmit: (values, action) => {
      const existingData = JSON.parse(getCookie("users")) || [];
      const user = existingData.find(
        (user) => user.name === values.name && user.password === values.password
      );
      if (user) {
        dispatch(loginSuccess(user));
        const existingcart = JSON.parse(getCookie("carts")) || [];
        const userCart = existingcart?.find(
          (item) => item.username === values.name
        );

        if (userCart) {
          const cartItems = userCart.cart;
          cartItems.forEach((item) => {
            dispatch(addtocart(item));
          });
        }
        action.resetForm();
        navigate("/");
        toast.success(`${user.name} Logged in`);
      } else {
        action.setFieldError("name", "Invalid name or password");
        action.setFieldError("password", "Invalid email or password");
      }
    },
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
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
      <div className="bg-slate-100 flex flex-col pt-24 pb-24 items-center w-[100%]">
        <div className="bg-white border  flex flex-col justify-center items-center border-slate-300 shadow-2xl ">
          <form
            className="p-4 flex flex-col  justify-center items-center gap-5"
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
                className="md:w-80 mdsm:w-60 border border-slate-400 focus:border-teal focus:outline-none focus:ring-0 h-10"
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
                className="md:w-80  mdsm:w-60  border border-slate-400 focus:border-teal focus:outline-none focus:ring-0 h-10"
              />
              {formik.errors.password && formik.touched.password ? (
                <span className="error font-semibold text-red-500">
                  {formik.errors.password}
                </span>
              ) : null}
            </span>

            <button
              type="submit"
              className="w-full mdsm:w-[40%] sm:w-30 bg-blue-500 text-white font-semibold text-lg px-2 py-2 md:px-6 md:py-2"
            >
              Sign In
            </button>
          </form>
          <span className="w-full sm:w-30 flex justify-center text-black font-semibold text-lg px-6 py-2">
            <Link to="/Signup">Have not Account ? Sign Up</Link>
          </span>
        </div>
      </div>

      <Footer />
     
    </div>
  );
};

export default SignIn;
