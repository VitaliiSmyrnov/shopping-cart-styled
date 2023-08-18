import React from "react";
import { Link } from "react-router-dom";

import { HeaderStyled, CartWrapper } from "./Header.styled";

import logo from "src/assets/svg/shopping-bags.svg";
import shoppingCart from "src/assets/svg/shopping-cart.svg";

export const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <Link to="/">
     
          <img src={logo} alt="Logo" />
 
      </Link>

      <Link to="/cart">
        <CartWrapper>
          <img src={shoppingCart} alt="Shopping cart" />
          <span>3</span>
        </CartWrapper>
      </Link>
    </HeaderStyled>
  );
};
