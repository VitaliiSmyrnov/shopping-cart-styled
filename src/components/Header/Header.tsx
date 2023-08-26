import React from "react";
import { Link } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";

import { StyledHeader, CartWrapper } from "./Header.styled";

import logo from "src/assets/svg/shopping-bags.svg";
import shoppingCart from "src/assets/svg/shopping-cart.svg";

import { CartProps } from "src/modules/IProducts";

export const Header: React.FC = () => {
  const [cart] = useLocalStorageState<CartProps>("cart");

  const productsCount: number = Object.keys(cart || {}).length;

  return (
    <StyledHeader>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>

      <Link to="/cart">
        <CartWrapper>
          <img src={shoppingCart} alt="Shopping cart" />
          <span>{productsCount}</span>
        </CartWrapper>
      </Link>
    </StyledHeader>
  );
};
