import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const myCartQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className="header bg-white z-50 fixed w-full h-[72px] shadow-md flex items-center justify-between font-Popins px-[1rem] md:px-[5rem]">
      <div className="logo">
        <Link to="/">
          <h1 className="text-xl md:text-2xl font-semibold">ByteBazaar</h1>
        </Link>
      </div>
      <div className="tabs flex items-center justify-center gap-5">
        <ul
          className={`${
            menuToggle
              ? "flex absolute md:static top-[72px] h-screen md:h-full pr-[80%] md:pr-0 px-12 md:px-0 py-8 md:py-0 bg-white border-2 md:border-none translate-x-0"
              : "absolute md:static top-[72px] right-[-100rem] md:flex"
          } flex-col md:flex-row items-center transition-all ease-in justify-start md:justify-center gap-3`}
        >
          <Link
            to="/"
            className="hover:bg-zinc-100 px-2 py-2 rounded-full transition-all delay-100"
          >
            <li onClick={() => setMenuToggle((prev) => !prev)}>Home</li>
          </Link>
          <Link
            to="/about"
            className="hover:bg-zinc-100 px-2 py-2 rounded-full transition-all delay-100"
          >
            <li onClick={() => setMenuToggle((prev) => !prev)}>About</li>
          </Link>
          <Link
            to="/products"
            className="hover:bg-zinc-100 px-2 py-2 rounded-full transition-all delay-100"
          >
            <li onClick={() => setMenuToggle((prev) => !prev)}>Products</li>
          </Link>
          <Link
            to="/contact"
            className="hover:bg-zinc-100 px-2 py-2 rounded-full transition-all delay-100"
          >
            <li onClick={() => setMenuToggle((prev) => !prev)}>Contact</li>
          </Link>
        </ul>
        <Link to="/cart" className="text-xl relative">
          <FaShoppingCart />
          <p className="text-[10px] text-white absolute -top-4 px-1 w-5 h-5 flex justify-center items-center -right-2 bg-red-600 rounded-full">
            {myCartQuantity}
          </p>
        </Link>
        <label className="flex md:hidden flex-col gap-2 w-8">
          <input
            className="peer hidden"
            type="checkbox"
            onChange={() => setMenuToggle((prev) => !prev)}
            checked={menuToggle}
          />
          <div className="rounded-2xl h-[3px] w-1/2 bg-black duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]"></div>
          <div className="rounded-2xl h-[3px] w-full bg-black duration-500 peer-checked:-rotate-45"></div>
          <div className="rounded-2xl h-[3px] w-1/2 bg-black duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]"></div>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
