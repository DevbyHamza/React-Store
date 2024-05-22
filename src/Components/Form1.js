import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchCountries } from "../Slice/countrySlice";

const MyForm = () => {
const dispatch = useDispatch();
let countries = useSelector((state) => state.Countries.data);
useEffect(() => {
 dispatch(fetchCountries());
  }, [dispatch]);
  const formik = useFormik({
    initialValues: {
      country: "",
      city: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    formik.setFieldValue("country", selectedCountry);
    formik.setFieldValue("city", ""); // Reset city when country changes
  };

  return (
    <div className=" flex items-center justify-center p-24">

   
    <form
      onSubmit={formik.handleSubmit}
      className="w-[50%] flex flex-col justify-center items-start gap-10 p-10 border-slate-500 border-2 "
    >
    
        <div className="border-2  border-slate-400">
          Country:
          <select
            id="country"
            name="country"
            onChange={handleCountryChange}
            value={formik.values.country}
          >
            <option value="">Select a country</option>
            {countries.map((country) => (
              <option key={country.country} value={country.country}>
                {country.country}
              </option>
            ))}
          </select>
        </div>
        <div className="border-2  border-slate-400">
          <label htmlFor="city">City:</label>
          <select
            id="city"
            name="city"
            onChange={formik.handleChange}
            value={formik.values.city}
            disabled={!formik.values.country} // Disable city dropdown if no country selected
          >
            <option value="">Select a city</option>
            {formik.values.country &&
              countries
                .find((country) => country.country === formik.values.country)
                .cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
          </select>
        </div>
        <button type="submit" className="border-2 p-2 bg-blue-300 font-semibold border-slate-400">Submit</button>
      
    </form>
    </div>
  );
};

export default MyForm;
