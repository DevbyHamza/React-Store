import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link component
import ReactStars from "react-rating-stars-component";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { toast } from "react-toastify";
const Women = () => {
  let products = useSelector((state) => state.Products.data);
  const [sortBy, setSortBy] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  if (sortBy === "asc") {
    products = products.slice().sort((a, b) => a.price - b.price);
    toast.success("Sorted by price");
  } else if (sortBy === "desc") {
    products = products.slice().sort((a, b) => b.price - a.price);
    toast.success("Sorted by Price");
  }
  if (sortBy === "A") {
    products = products.slice().sort((a, b) => a.title.localeCompare(b.title));
    toast.success("Sorted by Name",);
  } else if (sortBy === "Z") {
    products = products.slice().sort((a, b) => b.title.localeCompare(a.title));
    toast.success("Sorted by Name");
  }
  const handleFilter = (event) => {
    const value = event.target.value;
    if (value === "reset") {
      setSortBy(null);
    } else {
      setSortBy(value);
    }
  };
  products = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar
        textColor="text-black"
        bgColor="bg-white"
        numberbg="bg-black"
        bag={require("../Navbar/cartbagblack.png")}
        numbertext="text-white"
        user={require("../Navbar/userblack.png")}
      />
      <div className="pt-20">
        <div className=" bg-slate-100 flex flex-col justify-center items-center md:justify-start md:items-start md:flex-row w-[100%] p-8">
          <div className="flex flex-col justify-center ms:justify-start md:items-start items-center mt-16 pt-10 sm:w-[25%] gap-4 md:p-14 mb-6">
            <div className="w-[100%] flex gap-2">
              <input
                className="py-2 px-4 focus:border-teal focus:outline-none focus:ring-0   "
                placeholder="Search Product "
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
              />
              <div class="bg-blue-500 text-white w-28 ">
              
               <span className="text-3xl pl-3 "> &#8250;</span>
              </div>
            </div>
            <div className="text-3xl">Categories</div>
            <Link
              to="/Men"
              className=" border-b-2 border-slate-100 hover:border-black p-2"
            >
              Mens
            </Link>
            <Link
              to="/Women"
              className=" border-b-2 border-slate-100 hover:border-black p-2"
            >
              Womens
            </Link>
            <Link
              to="/Electronic"
              className="  border-b-2 border-slate-100 hover:border-black p-2"
            >
              Electronic
            </Link>
          </div>
          <div className="bg-white flex flex-col justify-center p-4 items-center md:justify-start md:items-start gap-14 md:m-6 mt-16 md:p-24 sm:w-[100%] md:[75%]">
            <div className="text-slate-500">Home/Store</div>

            <div className="border-2">
              <select onChange={handleFilter}>
                <option value="reset">Sort By</option>
                <option value="asc">Low Price To High</option>
                <option value="desc">High Price to Low</option>
                <option value="A">A to Z</option>
                <option value="Z">Z to A</option>
              </select>
            </div>
            <div className="flex  gap-12 p-4 flex-wrap">
              {products.map((product, index) => (
                <div className="md:w-60 flex flex-col gap-6    " key={index}>
                  <div to={`/product/${product.id}`}>
                    <div className=" relative  flex justify-center  ">
                      <img
                        src={product.image}
                        alt="product"
                        className="md:w-[250px]  w-[150px] h-[150px]  md:h-[250px]"
                      />
                    </div>
                  </div>
                  <div className="  flex flex-col">
                    <Link
                      to={`/product/${product.id}`}
                      className="font-bold w-60 md:w-[100%] h-20 hover:cursor-pointer"
                    >
                      {product.title}
                    </Link>
                    <span className=" text-gray-500">{product.category}</span>
                    <span className="font-bold">${product.price}</span>
                    <span>
                      <ReactStars
                        count={5}
                        size={20}
                        isHalf={true}
                        value={product.rating.rate}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                      />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Women;
