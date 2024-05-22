import React from "react";
import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUs.jsx";
import Contact from "./Components/Contactus/Contact.js";
import Main from "./Main.jsx";
import CheckOut from "./Components/CheckOut/CheckOut.js";
import Layout from "./Layout.jsx";
import ProductDetail from "./Components/ProductDetail/ProductDetail.js";
import CartData from "./Components/CartData/CartData.js";
import Login from "./Components/Login/Login/Login.js";
import Signup from "./Components/Login/Signup/Signup.js";
import Mens from "./Components/StoreFilters/Mens.js";
import Women from "./Components/StoreFilters/Women.js";
import Electronics from "./Components/StoreFilters/Electronics.js";
import All from "./Components/StoreFilters/All.js";
import Addproduct from "./Components/AddProduct/Addproduct.js";
import MyForm from "./Components/Form1.js";
import Formikkeyword from "./Components/Formikkeyword.js";
import Form3 from "./Components/Form3.js"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<CartData />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Men" element={<Mens />} />
      <Route path="/Women" element={<Women />} />
      <Route path="/Electronic" element={<Electronics />} />
      <Route path="/All" element={<All />} />
      <Route path="/addproduct" element={<Addproduct />} />
      <Route path="/form" element={<MyForm />} />
      <Route path="/form2" element={<Formikkeyword />} />
      <Route path="/form3" element={<Form3 />} />
    </Route>

  )
);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
