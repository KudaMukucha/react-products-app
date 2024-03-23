import React, { useEffect } from "react";
import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import { Link } from "react-router-dom";

export default function Groceries() {
  const [groceries, setGroceries] = useState([]);

  const getGroceries = async () => {
    const api = await fetch(`http://localhost:5173/products.json`);
    const data = await api.json();

    const filteredGroceries = data.products.filter(
      (product) => product.category === "groceries"
    );
    setGroceries(filteredGroceries);
    console.log(groceries);
  };

  useEffect(() => {
    getGroceries();
  }, []);
  return (
    <div className="wrapper">
      <h3>Groceries Picks</h3>
      <Splide
        options={{
          perPage: 3,
          pagination: false,
          gap: "2rem",
          drag: "free",
        }}
      >
        {groceries.map((item) => {
          return (
            <SplideSlide key={item.id}>
              <div className="card">
                <Link to={"/product/" + item.id}>
                  <p>{item.title}</p>
                  <img src={item.thumbnail} alt={item.title} />
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
