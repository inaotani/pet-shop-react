import React from "react";
import "./style.css";
import Btn from "../Btn";

const Card = ({ card }) => {
  return (
    <div className="product">
      <img className="product-img" src={card.img} />
      <div className="product-info">
        <h3 className="product-name">{card.title}</h3>
        <p className="product-price">R$ {card.price}</p>
        <Btn link={card.link}>Comprar</Btn>
      </div>
    </div>
  );
};

export default Card;
