import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  let params = useParams();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDetails = async () => {
    const api = await fetch("http://localhost:5173/products.json");
    const data = await api.json();

    const filteredDetails = data.products.find(
      (product) => product.id === Number(params.name)
    ); // Convert params.name to a number

    if (filteredDetails) {
      setDetails(filteredDetails);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <div>
      {loading ? (
        "Loading..."
      ) : details ? (
        <div className="details-wrapper">
          <div>
            <h2>{details.title}</h2>
            <img src={details.thumbnail} alt="" />
          </div>
          <div className="info">
            <h5>Product Details</h5>
            <p>{details.description}</p>
            <p>${details.price}</p>
            <p>{details.brand}</p>
            <p>Rating - {details.rating}</p>
          </div>
        </div>
      ) : (
        "Product not found"
      )}
    </div>
  );
}
