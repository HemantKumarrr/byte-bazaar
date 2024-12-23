import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RiStarSFill } from "react-icons/ri";
import { IoMdArrowRoundBack } from "react-icons/io";
import AddToCartBtn from "../components/AddToCartBtn";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/features/cartSlice";
import { Bounce, toast } from "react-toastify";
import Loader from "../components/Loader";

const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const id = useParams().id;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(singleProduct));
    toast.success("item added", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };
  const fetchProduct = async () => {
    try {
      setIsLoading(true);
      const data = await fetch(
        `${import.meta.env.VITE_BASE_URL}/products/${id}`
      );
      const response = await data.json();
      setSingleProduct(response);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    <div>
      <div className="pt-[102px] md:pt-[150px] px-4 md:px-[5rem] flex flex-col justify-center items-center gap-0">
        <Link to="/products" className="w-full px-2 md:px-[5rem]">
          <IoMdArrowRoundBack className="text-4xl p-1 active:bg-[#cccc]  rounded-full hover:bg-[#eeeeee] cursor-pointer" />
        </Link>
        <div className="flex flex-col md:flex-row items-center gap-16 justify-center pb-12 md:px-[5rem]">
          {!isLoading ? (
            <>
              <div className="image flex justify-center items-center py-4">
                <img
                  src={singleProduct.image}
                  alt="product-image"
                  className="w-[8rem] md:w-[12rem]"
                />
              </div>
              <div
                className="info w-full font-Popins md:w-[50%] flex flex-col items-start justify-center gap-4 px-8 md:px-6 py-2 border border-none md:border-black rounded-lg shadow-none md:shadow-md min-h-[20rem]
         "
              >
                <h1 className="text-2xl font-semibold">
                  <p className="text-xs text-gray-600 font-semibold">
                    {singleProduct.category}
                  </p>
                  {singleProduct.title}
                </h1>
                <p className="text-sm">{singleProduct.description}</p>
                <div className="flex justify-between items-center w-full">
                  <div className="">
                    <p className="text-xl font-semibold py-2">
                      Price: $ {singleProduct.price}
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <RiStarSFill className="text-2xl text-yellow-400" />
                    <p className="text-xl font-semibold">
                      {singleProduct?.rating?.rate}
                    </p>
                  </div>
                </div>
                <div className="btn w-full">
                  <AddToCartBtn handleAddToCart={handleAddToCart} />
                </div>
              </div>
            </>
          ) : (
            <div className="pt-[200px]">
              <Loader />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
