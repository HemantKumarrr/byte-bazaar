import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";

const Products = ({ isLoading }) => {
  const { ProductList } = useSelector((state) => state.product);

  return (
    <div className="pt-[102px] z-0 flex flex-wrap justify-center items-center gap-5 px-4 md:px-[5rem]">
      {isLoading ? (
        <div className="w-full h-[calc(100vh-72px)] flex justify-center items-center">
          <Loader width={"20"} />
        </div>
      ) : (
        ProductList.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })
      )}
    </div>
  );
};

export default Products;
