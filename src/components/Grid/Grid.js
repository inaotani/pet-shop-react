import React from "react";
import "./style.css";
import Card from "../Card";

const Grid = ({ title, products }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="product-grid container">
        {products.map((single, index) => (
          <Card
            key={index}
            card={{
              title: single.name,
              price: single.price,
              img: single.photo,
              link: `/p/${single._id}`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Grid;
