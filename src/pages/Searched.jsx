import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
export default function Searched() {
  const [searchedProducts, setSearchedProducts] = useState([]);
  let params = useParams();
  const getSearched = async (name) => {
    const api = await fetch(`http://localhost:5173/products.json`);
    const data = await api.json();

    const filteredProducts = data.products.filter((product) =>
      product.title.toLowerCase().includes(`${name.toLowerCase()}`)
    );
    setSearchedProducts(filteredProducts);
    // console.log(products)
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);
  return (
    <div className="grid">
      {searchedProducts.length > 0
        ? searchedProducts.map((product) => {
            return (
              <div key={product.id} className={"grid-card"}>
                <img src={product.thumbnail} alt={"product image"} />
                <h4>{product.title}</h4>
              </div>
            );
          })
        : `${params.search} not found!`}
    </div>
  );
}
