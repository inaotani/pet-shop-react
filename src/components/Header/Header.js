import React from 'react';
import Style from './style.css';
import { useState } from 'react';
import menuIcon from './../../assets/icons/menu-icon.svg';
import cartIcon from './../../assets/icons/cart.svg';
import FontSizeChanger from 'react-font-size-changer';

const Header = ({menuList}) => {
  const [menuOpen, setmenuOpen] = useState(false);

  function openMenu() {
    setmenuOpen(!menuOpen);
  }

  return (
    <header id="header">
      <div className="container">
        <nav id="nav-menu" className={menuOpen ? 'open' : ''}>
          <ul id="target2">
          {menuList.map((menuItem, index) =>
            <li key={index}>
                <a href={menuItem.link}>
                    {menuItem.text}
                </a>
            </li>
          )}
          </ul>
        </nav>

        <img className="icon" src={menuIcon} alt="Menu hamburguer" onClick={openMenu} />
        
        <h1 className="site-title">Pet Shop</h1>
        
        <div className="right">
          <FontSizeChanger
            targets={['#target', '#target2']}
            onChange={(element, newValue, oldValue) => {
              console.log(element, newValue, oldValue);
            }}
            options={{
              stepSize: 2,
              range: 4
            }}
            customButtons={{
              up: <span style={{'fontSize': '25px'}}>A</span>,
              down: <span style={{'fontSize': '14px'}}>A</span>,
              style: {
                backgroundColor: 'white',
                color: '#8643f3',
                WebkitBoxSizing: 'border-box',
                WebkitBorderRadius: '5px',
                width: '30px',
                height: '30px',
                lineHeight: '30px'
              },
              buttonsMargin: 5
            }}          
          />
          <a href="/carrinho"><img className="icon" src={cartIcon} /></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
