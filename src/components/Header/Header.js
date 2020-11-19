import React from "react";
import Style from "./style.css";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <nav id="nav-menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Rações</a>
            </li>
            <li>
              <a href="#">Brinquedos</a>
            </li>
            <li>
              <a href="#">Higiene</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </nav>
        <h1 className="site-title">Pet Shop</h1>
      </div>
    </header>
  );
};

export default Header;
