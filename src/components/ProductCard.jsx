import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import AddToCartBtn from "./AddToCartBtn";
import { addToCart } from "../store/features/cartSlice";
import { Bounce, toast } from "react-toastify";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(item));
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

  return (
    <div className="flex hover:scale-[1.050] transition-all ease-in -z-5">
      <div className="card w-[16rem] flex flex-col justify-between py-5 px-1 items-center flex-wrap border border-black rounded-lg shadow-md min-h-[20rem]">
        <Link to={`/single-product/${item.id}`} className="img">
          {!item.image ? (
            <h1>Loading...</h1>
          ) : (
            <img
              src={item.image}
              alt="product-image"
              className="w-[10rem] object-cover object-center h-[10rem]"
            />
          )}
        </Link>
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
    </div>
  );
};

export default ProductCard;
