import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Error404 from "./pages/Error404";
import Navbar from "./components/Navbar";
import { useDispatch } from "react-redux";
import { setProducts } from "./store/features/productSlice";
import { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const data = await fetch(`${import.meta.env.VITE_BASE_URL}/products`);
      const response = await data.json();
      dispatch(setProducts(response));
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [dispatch]);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/products"
            element={<Products isLoading={isLoading} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/single-product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
