import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div className="pt-[72px] z-0">
      <div className="w-full md:px-[10rem] py-[5rem] flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-cente gap-10 md:gap-5">
          <div className="text font-Popins flex flex-col justify-center items-center md:items-start">
            <h1 className="text-4xl md:text-6xl hover:scale-[1.050] transition-all delay-150 cursor-default font-semibold text-center md:text-start">
              ByteBazaar
            </h1>
            <p className="text-xs px-8 w-full md:px-0 md:text-sm md:w-[26rem] text-center md:text-start py-4 text-gray-800">
              Discover a world of unbeatable deals and top-quality products at
              your fingertips! Shop smarter, live better, and enjoy seamless
              shopping experiences tailored just for you.
            </p>
            <Link
              to="/products"
              className="bg-blue-600 text-white px-4 py-2 shadow-lg hover:bg-blue-500"
            >
              Shop Now
            </Link>
          </div>
          <div className="image">
            <img
              src="/images/shopping.jpg"
              alt="shopping image"
              className="w-full md:min-w-[28rem] shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col py-8 border-y-2 justify-center items-center font-Popins">
        <p className="text-xs font-semibold md:text-sm text-gray-700">
          Check Now
        </p>
        <h1 className="text-xl md:text-3xl font-semibold">
          Our Features Services
        </h1>
        <div className="card-container font-Popins flex md:flex-row flex-col justify-center items-center gap-12 mt-4 py-2 px-4">
          <div className="card border rounded-md shadow-md">
            <img
              src="https://img.freepik.com/free-vector/realistic-smartphone-with-black-back-case_23-2148355781.jpg?t=st=1734606384~exp=1734609984~hmac=514b1fd12bef8c7e86011288d52eb38e4049a5d9c45bcd77ab33256ff7e534ca&w=740"
              alt="feature-image"
              className="w-[15rem] h-[15rem] border-b-2 border-gray-300"
            />
            <h1 className="text-center p-2 text-xl font-semibold">
              Electronics
            </h1>
          </div>
          <div className="card border rounded-md shadow-md">
            <img
              src="https://img.freepik.com/free-vector/shopping-clothing-fashion-icon-isolated_18591-82227.jpg?t=st=1734606929~exp=1734610529~hmac=4cd285d56818a92e0a68c46563fafc1a700088d883da0203e7e4a856219846b8&w=740"
              alt="feature-image"
              className="w-[15rem] h-[15rem] border-b-2 border-gray-300"
            />
            <h1 className="text-center p-2 text-xl font-semibold">Cloths</h1>
          </div>
          <div className="card border rounded-md shadow-md">
            <img
              src="https://img.freepik.com/free-vector/jewelry-accessories-realistic-set_1284-16770.jpg?t=st=1734607056~exp=1734610656~hmac=58a983ac4bd6081e6b9aea746abc2d6a25fef1be34121e54da76aa2a15ca8ec9&w=740"
              alt="feature-image"
              className="w-[15rem] h-[15rem] border-b-2 border-gray-300"
            />
            <h1 className="text-center p-2 text-xl font-semibold">Jewelery</h1>
          </div>
        </div>
        <Link
          to="/products"
          className="px-4 py-2 hover:bg-blue-600 text-xl bg-blue-700 text-white rounded-full mt-6"
        >
          Explore
          <FaExternalLinkAlt className="inline ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default Home;