import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
export default function Navbar() {
  return (
    <div className="header">
      <FaShoppingCart />
      <Link to={"/"} className="header-link">
        Goody Products
      </Link>
    </div>
  );
}
