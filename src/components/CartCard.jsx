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
    <div className="card flex bg-white justify-between h-full items-start border-b-2 gap-5 p-2 mt-4">
      <div className="image w-[150px] h-[150px]">
        <img
          src={item.image}
          loading="lazy"
          alt="cart-product-image"
          className="w-[150px] h-[150px] object-contain object-center"
        />
      </div>
      <div className="info font-Popins flex flex-col justify-between">
        <h1 className="text-md md:text-2xl font-semibold">{item.title}</h1>
        <p className="text-xs text-gray-600">{item.category}</p>
        <div className="flex flex-col md:flex-row items-start gap-2 md:gap-0 md:items-center mt-10 justify-between">
          <p className="text-md md:text-xl">
            Price : ${item.price * item.quantity}
          </p>
          <div className="btn flex items-center justify-center gap-2 border-2">
            <button
              onClick={handleIncreaseCartQuant}
              className="px-4 py-2 text-center border-r-2 flex justify-center items-center active:bg-zinc-300"
            >
              +
            </button>
            <p>{item.quantity}</p>
            <button
              onClick={handleDecreaseCartQuant}
              className="px-4 py-2 text-center border-l-2 flex justify-center items-center active:bg-zinc-300"
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
