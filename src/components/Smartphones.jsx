import { useEffect } from "react";
import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import { Link } from "react-router-dom";

export default function Smartphones() {
  const [smartphones, setSmartphones] = useState([]);

  const getSmartphones = async () => {
    const api = await fetch(`http://localhost:5173/products.json`);
    const data = await api.json();

    const filteredSmartphones = data.products.filter(
      (product) => product.category === "smartphones"
    );
    setSmartphones(filteredSmartphones);
    console.log(smartphones);
  };

  useEffect(() => {
    getSmartphones();
  }, []);
  return (
    <div className="wrapper">
      <h3>Smartphone Picks</h3>
      <Splide
        options={{
          perPage: 4,
          pagination: false,
          gap: "2rem",
          drag: "free",
        }}
      >
        {smartphones.map((smartphone) => {
          return (
            <SplideSlide key={smartphone.id}>
              <div className="card">
                <Link to={"/product/" + smartphone.id}>
                  <p>{smartphone.title}</p>
                  <img src={smartphone.thumbnail} alt={smartphone.title} />
                  <div className="gradient"></div>
                </Link>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}
