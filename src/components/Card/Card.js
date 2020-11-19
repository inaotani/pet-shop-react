import React from "react";
import Style from "./style.css";
import imgProduct from "../../assets/imgs/produto1.png";
import Btn from "../Btn";

const Card = () => {
  return (
    <div className="product">
      <img classNameName="product-img" src={imgProduct} />
      <div className="product-info">
        <h3 className="product-name">Royal Canin - Adulto - 15kg</h3>
        <p className="product-price">R$ 235,99</p>
        <Btn />
      </div>
    </div>
  );
};

export default Card;
