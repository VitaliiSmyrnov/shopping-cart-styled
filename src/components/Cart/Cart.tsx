import React from "react";
import useLocalStorageState from "use-local-storage-state";

import { CurrencyFormatter } from "src/components";

import { CartItem } from "./CartItem/CartItem";

import { Container, StyledTotal } from "./Cart.styled";

import { CartProps, Operation, Product } from "src/modules/IProducts";

export const Cart: React.FC = () => {
  const [cart, setCart] = useLocalStorageState<CartProps>("cart");

  const handleRemoveProduct = (productId: number): void => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[productId];
      return updatedCart;
    });
  };

  const handleUpdateQuantity = (productId: number, operation: Operation) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };

      if (updatedCart[productId]) {
        if (operation === "decrease") {
          updatedCart[productId] = {
            ...updatedCart[productId],
            quantity: updatedCart[productId].quantity - 1,
          };
        }

        if (operation === "increase") {
          updatedCart[productId] = {
            ...updatedCart[productId],
            quantity: updatedCart[productId].quantity + 1,
          };
        }
      }

      return updatedCart;
    });
  };

  const getProducts = (): Product[] => Object.values(cart || {});

  const totalPrice = getProducts().reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <Container>
      <h1>Cart</h1>

      <ul>
        {getProducts().map((product) => (
          <CartItem
            key={product.id}
            item={product}
            remove={() => handleRemoveProduct(product.id)}
            update={handleUpdateQuantity}
          />
        ))}
      </ul>

      <StyledTotal>
        Total: <CurrencyFormatter amount={totalPrice} />
      </StyledTotal>
    </Container>
  );
};
