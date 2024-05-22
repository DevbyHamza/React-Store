import React from "react";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { addkeyword, removekeyword } from "../Slice/AddkewordSlice";
import { toast } from "react-toastify";

const MyForm = () => {
  const dispatch = useDispatch();
  let countries = useSelector((state) => state.Countries.data);
  const keywords = useSelector((state) => state.Keywords);

  const formik = useFormik({
    initialValues: {
      keyword: "",
    },
    onSubmit: (values) => {
      if(values.keyword!==""){
      dispatch(addkeyword(values.keyword));
      formik.resetForm();
      }
      else{
        toast.error("Enter valid country")
      }
    },
  });

  const handleDeleteKeyword = (index) => {
    dispatch(removekeyword(index));
  };
  const handleCountryChange = (e) => {
  
    const selectedCountry = e.target.value;
    if (selectedCountry !== "") {
      formik.setFieldValue("keyword", selectedCountry);
    } else {
      formik.setFieldValue("keyword", ""); // Reset keyword field if no country selected
    }
 };

  return (
    <div className="flex items-center  flex-col justify-center gap-10 ">
      <div className=" flex flex-col w-[50%] border-2 border-black m-4 p-20   justify-center items-center gap-10">
        <div>
          <div className="flex flex-wrap w-[100%]">
            {keywords.map((keyword, index) => (
              <span
                className="flex relative bg-yellow-200 text-black font-semibold w-24  p-2 m-2 rounded-lg"
                key={index}
              >
                {keyword}
                <button
                  className="bg-slate-100 absolute -top-2 w-5 pl-1 pr-1 -right-2 rounded-md"
                  onClick={() => handleDeleteKeyword(index)}
                >
                  x
                </button>
              </span>
            ))}
          </div>
        </div>
        <form className="flex gap-2 p-2" onSubmit={formik.handleSubmit}>
          <div className="border-2  p-2 border-slate-400">
            Country:
            <select
              id="country"
              name="country"
              onChange={handleCountryChange}
              value={formik.values.country}
              className="focus:border-teal focus:outline-none focus:ring-0"
            >
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option key={country.country} value={country.country}>
                  {country.country}
                </option>
              ))}
            </select>
          </div>
          <button className="bg-blue-300 p-2 border-2 rounded-md" type="submit">
            Add Keyword
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyForm;
