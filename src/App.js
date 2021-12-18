import React from "react";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Form from "./pages/Form";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import { BrowserRouter as Router } from "react-router-dom";

import { Routes } from "react-router";
import { Route } from "react-router";
import ProductsShop from "./pages/ProductsShop";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Alert />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Form />} />
          <Route path="/products" element={<ProductsShop />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
