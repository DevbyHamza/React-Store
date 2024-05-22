import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useFormik } from "formik";
import { FormSchema } from "./FormSchema";
import { addProduct } from "../../Slice/ProductSlice";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Addproduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formintialvalues = {
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating:{
        rate:"",
    },
  };
  let id = 11;
  const formik = useFormik({
    initialValues: formintialvalues,
    validationSchema: FormSchema,
    onSubmit: (values, action) => {
      const { title, description, image, rate, category, price } = values;
      const newProduct = {
        id: id,
        title,
        price,
        description,
        category,
        image,
        rating:{
            rate:rate,
        },
      };
      dispatch(addProduct(newProduct));

     
      action.resetForm();
      navigate("/");
      toast.success("Product added successfully");
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

      <div className="pt-48 flex justify-center">
        <form
          onSubmit={formik.handleSubmit}
          className="flex pt-10 pb-10 flex-col gap-1 border border-slate-400 p-1 md::p-5 justify-start items-center w-[90%] mdsm:w-[70%] md:w-[60%] lg:w-[40%]"
        >
          <div className="sm:w-[80%] ">
            <input
              type="text"
              name="title"
              onBlur={formik.handleBlur}
              value={formik.values.title}
              onChange={formik.handleChange}
              placeholder="TITLE"
              className="w-64 mdsm:w-[90%] border border-slate-400 focus:border-teal focus:outline-none focus:ring-0  p-2 h-12"
            />
            <br />
            {formik.errors.title && formik.touched.title ? (
              <span className="error text-red-600">{formik.errors.title}</span>
            ) : null}
            <br />
          </div>

          <div className="sm:w-[80%] ">
            <input
              type="number"
              name="price"
              onBlur={formik.handleBlur}
              value={formik.values.price}
              onChange={formik.handleChange}
              placeholder="PRICE"
              className="w-64 mdsm:w-[90%]  border border-slate-400 focus:border-teal focus:outline-none focus:ring-0  p-2 h-12"
            />
            <br />
            {formik.errors.price && formik.touched.price ? (
              <span className="error text-red-600">{formik.errors.price}</span>
            ) : null}
            <br />
          </div>
          <div className="sm:w-[80%] ">
            <textarea
              type="text"
              name="description"
              onBlur={formik.handleBlur}
              value={formik.values.description}
              onChange={formik.handleChange}
              placeholder="DESCRIPTION"
              className="w-64 mdsm:w-[90%] h-48 border border-slate-400 focus:border-teal focus:outline-none focus:ring-0  p-2"
            />
            <br />
            {formik.errors.description && formik.touched.description ? (
              <span className="error text-red-600">
                {formik.errors.description}
              </span>
            ) : null}
            <br />
          </div>
        
          <div className="sm:w-[80%] pb-6 ">
            <select
              name="category"
              onBlur={formik.handleBlur}
              value={formik.values.category}
              onChange={formik.handleChange}
              placeholder="Category"
              className="w-64 mdsm:w-[90%] border border-slate-400 focus:border-teal focus:outline-none focus:ring-0  p-2 h-12"
            >
              <option value="">Select a Category</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="jewelery">Jewelery</option>
              <option value="electronics">Electronics</option>
            </select>
            <br />
          </div>
          <div className="sm:w-[80%] ">
            <input
              type="text"
              name="image"
              onBlur={formik.handleBlur}
              value={formik.values.image}
              onChange={formik.handleChange}
              placeholder="IMAGE URL "
              className="w-64 mdsm:w-[90%]  border border-slate-400 focus:border-teal focus:outline-none focus:ring-0  p-2 h-12"
            />
            <br />
            {formik.errors.image && formik.touched.image ? (
              <span className="error text-red-600">{formik.errors.image}</span>
            ) : null}
            <br />
          </div>
          <div className="sm:w-[80%] ">
            <input
              type="number"
              name="rate"
              onBlur={formik.handleBlur}
              value={formik.values.rate}
              onChange={formik.handleChange}
              placeholder="RATING"
              className="w-64 mdsm:w-[90%]   border border-slate-400 focus:border-teal focus:outline-none focus:ring-0  p-2 h-12"
            />
            <br />
            {formik.errors.rate && formik.touched.rate ? (
              <span className="error text-red-600">{formik.errors.rate}</span>
            ) : null}
            <br />
          </div>

          <div className="w-[100%] flex justify-center md:w-[80%]">
            <button
              type="submit"
              className=" bg-blue-500 font-semibold p-2 text-1xl md:text-[16px] sm:w-[35%] hover:bg-blue-600   text-white  py-[9.5px] md:px-5"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Addproduct;
