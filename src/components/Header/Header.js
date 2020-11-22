import React from 'react';
import Style from './style.css';
import { useState } from 'react';
import menuIcon from './../../assets/icons/menu-icon.svg';
import cartIcon from './../../assets/icons/cart.svg';

const Header = ({menuList}) => {
  const [menuOpen, setmenuOpen] = useState(false);

  function openMenu() {
    setmenuOpen(!menuOpen);
  }

  return (
    <header id="header">
      <div className="container">
        <nav id="nav-menu" className={menuOpen ? 'open' : ''}>
          <ul>
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

        <a href="#"><img className="icon" src={cartIcon} /></a>
      </div>
    </header>
  );
};

export default Header;
