import { useState } from "react";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";

const Products = ({ isLoading }) => {
  const { ProductList } = useSelector((state) => state.product);
  const [filteredProduct, setFilteredProduct] = useState(ProductList);
  const [myCategory, setMyCategory] = useState("All");

  const filterProduct = (category) => {
    setFilteredProduct(
      ProductList.filter((item) => {
        if (category === "All") {
          return item;
        } else {
          return item.category === category;
        }
      })
    );
  };

  const handleFilter = (category) => {
    filterProduct(category);
    setMyCategory(category);
  };

  return (
    <>
      <div className="pt-[102px] px-4 md:px-[5rem]">
        <section className="w-full pb-12 px-8">
          <p className="text-2xl py-4 font-Popins font-semibold">
            Search Category
          </p>
          <div className="font-Popins flex items-start flex-wrap gap-4 text-black">
            <button
              onClick={() => handleFilter("All")}
              className={`border ${
                myCategory == "All" && "bg-black text-white"
              }  px-4 rounded-full py-1 border-black`}
            >
              All
            </button>
            <button
              onClick={() => handleFilter("men's clothing")}
              className={`border ${
                myCategory == "men's clothing" && "bg-black text-white"
              }  px-4 rounded-full py-1 border-black`}
            >
              men's clothing
            </button>
            <button
              onClick={() => handleFilter("women's clothing")}
              className={`border ${
                myCategory == "women's clothing" && "bg-black text-white"
              }  px-4 rounded-full py-1 border-black`}
            >
              women's clothing
            </button>
            <button
              onClick={() => handleFilter("electronics")}
              className={`border ${
                myCategory == "electronics" && "bg-black text-white"
              }  px-4 rounded-full py-1 border-black`}
            >
              electronics
            </button>
            <button
              onClick={() => handleFilter("jewelery")}
              className={`border ${
                myCategory == "jewelery" && "bg-black text-white"
              }  px-4 rounded-full py-1 border-black`}
            >
              jewelery
            </button>
          </div>
        </section>
        <div className="pb-12 bg-white text-black z-0 flex flex-wrap justify-center items-center gap-5">
          {isLoading ? (
            <div className="w-full h-[calc(100vh-72px)] flex justify-center items-center">
              <Loader width={"20"} />
            </div>
          ) : (
            filteredProduct.map((item) => {
              return <ProductCard key={item.id} item={item} />;
            })
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
