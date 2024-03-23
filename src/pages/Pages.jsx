import Home from "./Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Products from "./Products";
import Searched from "./Searched";
import Product from "./Product";
import { AnimatePresence } from "framer-motion";
export default function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/results/:search" element={<Searched />} />
        <Route path="/product/:name" element={<Product />} />
      </Routes>
    </AnimatePresence>
  );
}
