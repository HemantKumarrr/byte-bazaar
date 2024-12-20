import { IoMdCloseCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  addToCart,
  decreaseQuantity,
} from "../store/features/cartSlice";

const CartCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeFromCart(item.id));
  };

  const handleIncreaseCartQuant = () => {
    dispatch(addToCart(item));
  };
  const handleDecreaseCartQuant = () => {
    dispatch(decreaseQuantity(item.id));
  };

  return (
    <div className="card flex justify-between h-full items-start border-b-2 gap-5 p-2 mt-4">
      <div className="image">
        <img src={item.image} alt="cart-product-image" className="w-[8rem]" />
      </div>
      <div className="info w-full h-full font-Popins flex flex-col justify-between">
        <h1 className="text-md md:text-2xl font-semibold">{item.title}</h1>
        <p className="text-xs text-gray-600">{item.category}</p>
        <div className="flex items-center h-full mt-4 justify-between">
          <p className="text-md md:text-xl">
            Price : ${item.price * item.quantity}
          </p>
          <div className="btn flex items-center justify-center gap-2 border-2 px-2 py-1">
            <button
              onClick={handleIncreaseCartQuant}
              className="w-5 h-5 p-1 text-center border-r-2 flex justify-center items-center active:bg-zinc-300"
            >
              +
            </button>
            <p>{item.quantity}</p>
            <button
              onClick={handleDecreaseCartQuant}
              className="w-5 h-5 p-1 text-center border-l-2 flex justify-center items-center active:bg-zinc-300"
            >
              -
            </button>
          </div>
        </div>
      </div>

      <button onClick={handleRemoveItem} className="text-3xl">
        <IoMdCloseCircle />
      </button>
    </div>
  );
};

export default CartCard;
