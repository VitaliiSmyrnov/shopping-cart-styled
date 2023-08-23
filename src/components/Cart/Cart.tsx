import React from "react";
import useLocalStorageState from "use-local-storage-state";

import { CurrencyFormatter } from "src/components";

import { CartItem } from "./CartItem/CartItem";

import { Container, StyledTotal } from "./Cart.styled";

import { CartProps } from "src/modules/IProducts";

export const Cart: React.FC = () => {
  const [cart, setCart] = useLocalStorageState<CartProps>("cart");

  const getProducts = () => Object.values(cart || {});

  const totalPrice = getProducts().reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <Container>
      <h1>Cart</h1>

      <ul>
        {getProducts().map((product) => (
          <CartItem key={product.id} item={product} />
        ))}
      </ul>

      <StyledTotal>
        Total: <CurrencyFormatter amount={totalPrice} />
      </StyledTotal>
    </Container>
  );
};
