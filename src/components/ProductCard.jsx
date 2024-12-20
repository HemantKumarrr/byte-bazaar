import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import AddToCartBtn from "./AddToCartBtn";
import { addToCart } from "../store/features/cartSlice";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };

  return (
    <Link className="flex hover:scale-[1.050] transition-all ease-in -z-5">
      <div className="card w-[16rem] flex flex-col justify-between py-5 px-1 items-center flex-wrap border border-black rounded-lg shadow-md min-h-[20rem]">
        <div className="img">
          <img
            src={item.image}
            alt="product-image"
            className="w-[10rem] object-cover object-center h-[10rem]"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-4 px-6">
          <div className="w-full">
            <h1>{item.title.slice(0, 28)}</h1>
            <p>Price : ${item.price}</p>
          </div>
          <div className="w-full">
            <AddToCartBtn handleAddToCart={handleAddToCart} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
