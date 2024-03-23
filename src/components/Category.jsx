import {
  FaShoppingBasket,
  FaPaintRoller,
  FaMobileAlt,
  FaSpa,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
export default function Category() {
  return (
    <div className="category-list">
      <NavLink to={"/products/groceries"} className={"category-link"}>
        <FaShoppingBasket />
        <h4>Groceries</h4>
      </NavLink>
      <NavLink to={"/products/home-decoration"} className={"category-link"}>
        <FaPaintRoller />
        <h4>Decoration</h4>
      </NavLink>
      <NavLink to={"/products/smartphones"} className={"category-link"}>
        <FaMobileAlt />
        <h4>Smartphones</h4>
      </NavLink>
      <NavLink to={"/products/skincare"} className={"category-link"}>
        <FaSpa />
        <h4>Skincare</h4>
      </NavLink>
    </div>
  );
}
