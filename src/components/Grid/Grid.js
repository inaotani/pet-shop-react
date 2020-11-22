import React from "react";
import Style from "./style.css";
import Card from "../Card";
import productImg from './../../assets/imgs/produto1.png'

const Grid = ({title}) => {
  const cards = [
    {title: 'Royal Canin - Adulto - 15kg', price: '350,66', img: productImg, link: '/produto'},
    {title: 'Royal Canin - Adulto - 15kg', price: '350,66', img: productImg, link: '/produto'},
    {title: 'Royal Canin - Adulto - 15kg', price: '355,66', img: productImg, link: '/produto'},
    {title: 'Royal Canin - Adulto - 15kg', price: '355,66', img: productImg, link: '/produto'},
    {title: 'Royal Canin - Adulto - 15kg', price: '355,66', img: productImg, link: '/produto'},
    {title: 'Royal Canin - Adulto - 15kg', price: '355,66', img: productImg, link: '/produto'},
  ];
  return (
    <div>
      <h2>{title}</h2>
      <div className="product-grid container">
        {cards.map((single, index) =>
          <Card key={index} card={{title: single.title, price: single.price, img: single.img, link: single.link}} />
        )}
      </div>
    </div>
  );
}

export default Grid;
