import { useEffect } from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function Products() {
  const [products, setProducts] = useState([]);
  let params = useParams();
  const getProducts = async (name) => {
    const api = await fetch(`http://localhost:5173/products.json`);
    const data = await api.json();

    const filteredProducts = data.products.filter(
      (product) => product.category === `${name}`
    );
    setProducts(filteredProducts);
    // console.log(products)
  };

  useEffect(() => {
    getProducts(params.category);
    // console.log(params.category)
  }, [params.category]);
  return (
    <motion.div
      className="grid"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {products.map((product) => {
        return (
          <div key={product.id} className={"grid-card"}>
            <Link to={"/product/" + product.id}>
              <img src={product.thumbnail} alt={"product image"} />
              <h4>{product.title}</h4>
            </Link>
          </div>
        );
      })}
    </motion.div>
  );
}
