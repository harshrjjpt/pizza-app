import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Productscomponent from "./components/Productscomponent";
import "./index.css";
import React, { useState, useEffect } from "react";
import { data } from "./data";
import SingleProduct from "./pages/SingleProduct";
import { CartContext } from "./CartContext";

const App = () => {
  const [cart, setCart] = useState({});
  // fetching cart from the local storage
  useEffect(() => {
    const cart = window.localStorage.getItem("cart");
    setCart(JSON.parse(cart));
    console.log(JSON.parse(cart));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <Router>
        <CartContext.Provider value={{ cart, setCart }}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/products/:id" element={<SingleProduct />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </CartContext.Provider>
      </Router>
    </div>
  );
};

export default App;
