import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import { fetchProducts, removefromproducts } from "../../Slice/ProductSlice"; // Import the fetchProducts thunk
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ProductDesc from "./ProductDesc";
import Footer from "../Footer/Footer";
import { toast } from "react-toastify";
import { addtocart, removefromcart } from "../../Slice/AddtoCartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.Products.data);
  const isLoading = useSelector((state) => state.Products.isLoading);
  const isError = useSelector((state) => state.Products.isError);
  const [quantity, setQuantity] = useState(1); // State for quantity input

  useEffect(() => {
    window.scrollTo(0, 0);

    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  const handleCart = () => {
    const product = products.find((product) => product.id === Number(id));
    if (product) {
      dispatch(addtocart({ ...product, quantity: quantity }));
      toast.success("Product added to cart");
    }
  };
  const hanldlProduct = async (id) => {
    dispatch(removefromproducts(id));
    dispatch(removefromcart(id));
    toast.error("Product removed", {});
    navigate("/");
  };
  const editProduct = async (id) => {
    
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: 'test product',
          price: 13.5,
          description: 'lorem ipsum set',
          image: 'https://i.pravatar.cc',
          category: 'electronic'
        })
      });
  
  
      const updatedProduct = await response.json();
      console.log(updatedProduct);
      toast.success("Product edited", {});
     
  };
  

  const [activeTab, setActiveTab] = useState("description");

  const product = products.find((product) => product.id === Number(id));

  return (
    <div className=" divider-y-2 ">
      <Navbar
        textColor="bg-white"
        bgColor="bg-white"
        numberbg="bg-black"
        bag={require("../Navbar/cartbagblack.png")}
        numbertext="text-white"
        user={require("../Navbar/userblack.png")}
      />
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error fetching product details</div>}
      {product && (
        <div className="flex  flex-col w-[100%] bg-slate-100 justify-center pt-32 pb-24 divide-y-2  items-center">
          <div className="flex flex-col md:flex-row w-[80%] mb-20 justify-center">
            <div className="md:w-[50%]">
              <img
                className="md:h-[585px] md:w-[100%]"
                src={product.image}
                alt="helo"
              />{" "}
            </div>
            <div className="md:w-[50%] w-[100%] flex md:pl-10 pl-4 pt-4 flex-col gap-4">
              <span className="text-slate-400 text-sm ">
                Home/{product.category}/{product.title}
              </span>
              <span className="text-black">{product.category}</span>
              <span className="text-3xl">{product.title}</span>
              <span className="text-3xl font-semibold">
                ${product.price}
                <span className="text-lg font-normal text-black">
                  + Free Shipping{" "}
                </span>
              </span>
              <span>{product.description}</span>

              <span className="flex gap-2">
                <span>Categories:</span>
                <span>{product.category}</span>
              </span>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  className=" w-14 h-[100%] border border-slate-400 focus:border-teal focus:outline-none focus:ring-0  "
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                />
                <button
                  onClick={handleCart}
                  className=" bg-blue-500 font-semibold p-2 text-[16px] md:w-[40%]  hover:bg-blue-600   text-white  py-[6px] px-5"
                >
                  ADD TO CART
                </button>
                <Link
                  to="/cart"
                  className=" bg-blue-500 font-semibold p-2 text-[16px] md:w-[40%]  hover:bg-blue-600  flex justify-center  text-white  py-[6px] px-5"
                >
                  VIEW CART
                </Link>
              </div>
              <button
                onClick={() => hanldlProduct(product.id)}
                className=" bg-red-400 font-semibold p-2 text-[16px] md:w-[40%]  hover:bg-red-600   text-white  py-[6px] px-5"
              >
                Remove Product
              </button>
              <button
                onClick={() => editProduct(product.id)}
                className=" bg-yellow-400 font-semibold p-2 text-[16px] md:w-[40%]  hover:bg-red-600   text-white  py-[6px] px-5"
              >
                Edit Product
              </button>
            </div>
          </div>
          <div className="bg-slate-100  w-[80%] ">
            <div className="h-4 flex   gap-8  ">
              <Link
                to="#description"
                onClick={() => setActiveTab("description")}
                className={`pt-4  font-semibold text-slate-700 ${
                  activeTab === "description" ? "border-t-2 border-black" : ""
                }`}
              >
                Description
              </Link>
              <Link
                to="#additional-info"
                onClick={() => setActiveTab("additional-info")}
                className={`pt-4 text-slate-700  font-semibold ${
                  activeTab === "additional-info"
                    ? "border-t-2 border-black"
                    : ""
                }`}
              >
                Additional Information
              </Link>
              <Link
                to="#reviews"
                onClick={() => setActiveTab("reviews")}
                className={`pt-4 text-slate-700  font-semibold ${
                  activeTab === "reviews" ? "border-t-2 border-black" : ""
                }`}
              >
                Reviews (0)
              </Link>
            </div>
            <div className="pt-24">
              {activeTab === "description" && (
                <div id="description">
                  <ProductDesc />
                </div>
              )}
              {activeTab === "additional-info" && (
                <div id="additional-info">
                  Additional Information about Product{" "}
                </div>
              )}
              {activeTab === "reviews" && <div id="reviews">No Reviews</div>}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ProductDetail;
