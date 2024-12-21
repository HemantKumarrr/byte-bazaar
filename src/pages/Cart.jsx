import { useSelector, useDispatch } from "react-redux";
import CartCard from "../components/CartCard";
import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { clearCart } from "../store/features/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = JSON.parse(localStorage.getItem("cartList"));
  const myCartQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="pt-[72px] bg-white text-black">
      <div className="px-4 md:px-[10rem] py-8 md:py-12">
        <div className="font-Popins flex items-center justify-between px-2">
          <Link to="/products" className="p-1 hover:bg-[#eeeeee] rounded-full">
            <IoArrowBackSharp className="text-xl" />
          </Link>

          <h1 className="tracking-wider flex flex-col items-end">
            Shopping Bag ({myCartQuantity})
            <button
              onClick={handleClearCart}
              className="underline text-blue-800 px-2"
            >
              clear cart
            </button>
          </h1>
        </div>
        {myCartQuantity === 0 ? (
          <div className="h-[calc(100vh-300px)] flex justify-center items-center">
            <h1 className="text-4xl text-gray-500 font-Popins">Empty</h1>
          </div>
        ) : (
          <div className="cart-container flex flex-col gap-5 pt-8 pb-[4em]">
            {cartItems.map((item) => {
              return <CartCard key={item.id} item={item} />;
            })}
          </div>
        )}
      </div>
      <div className="checkout font-Popins text-white bg-blue-800 fixed p-4 md:py-4 -bottom-1 left-0 w-full px-8 md:px-[5rem]">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-[1rem] md:text-2xl">
            Total Price :{" "}
            <span className="px-1 md:px-2">${Math.round(totalPrice)}</span>
          </h1>
          <div>
            <button className="text-[1rem] md:text-xl flex items-center justify-center gap-2 bg-black px-4 py-1 rounded-sm hover:bg-white hover:text-black border border-black transition-all ease-in delay-75 hover:rounded-full active:scale-[0.90]">
              Check Out
              <MdOutlinePayment className="hover:text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
