import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <div className="w-full h-screen md:px-[10rem] py-[5rem] flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-cente gap-10 md:gap-5">
          <div className="text font-Popins flex flex-col justify-center items-center md:items-start">
            <h1 className="text-4xl md:text-6xl hover:scale-[1.050] transition-all delay-150 cursor-default font-semibold text-center md:text-start">
              ByteBazaar
            </h1>
            <p className="py-2 text-lg animate-pulse">E-commerce Store</p>
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
              loading="lazy"
              className="w-full md:min-w-[28rem] shadow-lg"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
