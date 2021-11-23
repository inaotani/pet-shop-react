import React from "react";
import "./style.css";
import Input from "./../Input";

const InlineCard = ({ card, children }) => {
  return (
    <div className="inline-card">
      <img role="img" className="product-img" src={card.photo} alt={card.alt} />
      <div className="product-info">
        <h3 className="product-name">
          <a role="link" href={`/p/${card.id}`}>{card.name}</a>
        </h3>
        <div>
          <p className="product-price">R$ {card.price}</p>
          <Input
            className="product-qtde"
            type="number"
            name="product-qtde"
            value={card.quantity}
          />
          {children}
        </div>
      </div>
    </div>
  );
};

export default InlineCard;
