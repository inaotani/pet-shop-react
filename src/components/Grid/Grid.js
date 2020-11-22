import React from "react";
import Style from "./style.css";
import Card from "../Card";
import productImg from './../../assets/imgs/produto1.png'

const Grid = () => {
  const cards = [
    {title: 'Royal Canin - Adulto - 15kg', price: '350,66', img: productImg},
    {title: 'Royal Canin - Adulto - 15kg', price: '350,66', img: productImg},
    {title: 'Royal Canin - Adulto - 15kg', price: '355,66', img: productImg},
    {title: 'Royal Canin - Adulto - 15kg', price: '355,66', img: productImg},
    {title: 'Royal Canin - Adulto - 15kg', price: '355,66', img: productImg},
    {title: 'Royal Canin - Adulto - 15kg', price: '355,66', img: productImg},
  ];
  return (
    <div className="product-grid">
      {cards.map((single, index) =>
        <Card key={index} card={{title: single.title, price: single.price, img: single.img}} />
      )}
    </div>
  );
}

export default Grid;
