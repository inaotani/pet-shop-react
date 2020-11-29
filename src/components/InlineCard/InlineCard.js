import React from 'react';
import './style.css';
import Input from './../Input';

const InlineCard = ({card, type}) => {
    let version;
    function cartCard(card) {
        return (
            <div>
                <p className="product-price">R$ {card.price}</p>
                <Input className="product-qtde" type="number" name="product-qtde" value="1" />
                <a href="#">remover</a>
            </div>
        );
    };
    
    function adminCard(card) {
        return (
            <div>
                <p>{card.description}</p>
                <p>Status: {card.status}</p>
                <p>Preço: {card.price}</p>
                <p>Qtde: {card.amount}</p>
                <div className="product-option">
                    <a href="#">Editar</a>
                    <a href="#">Excluir</a>
                </div>
            </div>
        );
    };
    
    if(type === "admin") {
        version = adminCard(card);
    }else {
        version = cartCard(card);
    }

    return (
        <div className="inline-card">
            <img className="product-img" src={card.img.src} alt={card.img.alt} />
            <div className="product-info">
                <h3 className="product-name"><a href="/produto">{card.name}</a></h3>
                {version}
            </div>
        </div>
    );
};

export default InlineCard;