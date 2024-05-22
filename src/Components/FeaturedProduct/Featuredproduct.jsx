import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useSelector } from "react-redux";
import bag from "./bag.png";
import { addtocart } from "../../Slice/AddtoCartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Featuredproduct = () => {
  let products = useSelector((state) => state.Products.data);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  // Pagination state
  const [page, setPage] = useState(1);
  const [disabled, setNextDisabled] = useState(false);
  const [rowsPerPage] = useState(5);
  let [paginatedProducts, setPaginatedProducts] = useState([]);

  const handleCart = (id) => {
    const product = products.find((product) => product.id === id);
    if (product) {
      dispatch(addtocart({ ...product, quantity: 1 }));
      toast.success("Product Added to Cart",{
        bodyClassName: "font-bold text-black",      
      });
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  useEffect(() => {
    
    const startingIndex = (page - 1) * rowsPerPage;
    const endingIndex = page * rowsPerPage;

    setPaginatedProducts(products.slice(startingIndex, endingIndex));
    const remainingProducts = products.slice(endingIndex);
    if (remainingProducts.length === 0) {
      setNextDisabled(true); // Disable the "Next" button
    } else {
      setNextDisabled(false); // Enable the "Next" button
    }
  }, [page, rowsPerPage, products, searchQuery]);
  let filteredproducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const pages = Math.ceil(products.length / 5);


  // Array to store numbers from 1 to page number
  const [pageNumberArray, setPageNumberArray] = useState([]);

  useEffect(() => {
    const tempArray = [];
    for (let i = 1; i <= pages; i++) {
      tempArray.push(i);
    }
    setPageNumberArray(tempArray);
  }, [pages]);

  return (
    <div className=" bg-slate-100 flex justify-center flex-col items-center w-[100%] p-8">
      <div className=" md:text-4xl sm:text-3xl p-7 font-semibold flex flex-col gap-8 justify-center items-center ">
        Featured Products
        <span className=" bg-blue-700 w-20 h-[2px]"></span>
      </div>

      <div className="w-[100%] flex  p-10 justify-center items-center gap-2">
        <input
          className="py-2 px-4 w-96 focus:border-teal focus:outline-none focus:ring-0   "
          placeholder="Search Product "
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
      </div>
      <div className="flex gap-6 md:p-16 w-[50%] md:w-full flex-wrap">
        {searchQuery === ""
          ? paginatedProducts.map((product, index) => (
              <div
                className=" md:w-60 flex flex-col justify-center gap-6  "
                key={index}
              >
                <div to={`/product/${product.id}`}>
                  <div className=" relative  flex justify-center  ">
                    <img
                      src={product.image}
                      alt="product"
                      className="md:w-[250px] md:h-[250px]"
                    />
                    <div className="absolute top-0 right-2 m-1 hover:cursor-pointer  h-8 w-8 p-1 bg-slate-400 rounded-2xl">
                      <img
                        onClick={() => handleCart(product.id)}
                        alt="cart"
                        src={bag}
                      />
                    </div>
                  </div>
                </div>
                <div className=" bg-slate-100 flex flex-col">
                  <Link
                    to={`/product/${product.id}`}
                    className="font-bold h-20 hover:cursor-pointer"
                  >
                    {product.title}
                  </Link>
                  <span className=" text-gray-500">{product.category}</span>
                  <span className="font-bold">${product.price}</span>
                  <span>
                    <ReactStars
                      count={5}
                      size={20}
                      isHalf={false}
                      value={product.rating.rate}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                  </span>
                </div>
              </div>
            ))
          : filteredproducts.map((product, index) => (
              <div className=" md:w-60 flex flex-col gap-6  " key={index}>
                <div to={`/product/${product.id}`}>
                  <div className=" relative  flex justify-center  ">
                    <img
                      src={product.image}
                      alt="product"
                      className="md:w-[250px] md:h-[250px]"
                    />
                    <div className="absolute top-0 right-2 m-1 hover:cursor-pointer  h-8 w-8 p-1 bg-slate-400 rounded-2xl">
                      <img
                        onClick={() => handleCart(product.id)}
                        alt="cart"
                        src={bag}
                      />
                    </div>
                  </div>
                </div>
                <div className=" bg-slate-100 flex flex-col">
                  <Link
                    to={`/product/${product.id}`}
                    className="font-bold h-20 hover:cursor-pointer"
                  >
                    {product.title}
                  </Link>
                  <span className=" text-gray-500">{product.category}</span>
                  <span className="font-bold">${product.price}</span>
                  <span>
                    <ReactStars
                      count={5}
                      size={20}
                      isHalf={false}
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
      {/* Pagination controls */}
      <div className="flex gap-10 w-[80%] justify-center items-center">
        <button
          className="border-2 p-2 disabled:opacity-45  disabled:cursor-not-allowed rounded-3xl bg-slate-300"
          onClick={(e) => handleChangePage(e, page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        <div className="flex gap-2">
          {pageNumberArray.map((pageNumber) => (
            <div
              key={pageNumber}
              className={`border border-slate-300 hover:cursor-pointer w-10 h-8 flex justify-center items-center rounded-md ${
                page === pageNumber ? "bg-blue-500 text-white" : ""
              }`}
              onClick={(e) => handleChangePage(e,pageNumber)}
            >
              {pageNumber}
            </div>
          ))}
        </div>
        <button
          className="border-2 disabled:opacity-45 disabled:cursor-not-allowed p-2 rounded-3xl bg-slate-300 w-20 "
          onClick={(e) => handleChangePage(e, page + 1)}
          disabled={disabled === true}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Featuredproduct;
