import React from "react";
import useLocalStorageState from "use-local-storage-state";

import { CurrencyFormatter } from "src/components";

import { StyledItem, ImageWrapper } from "./ProductItem.styled";

import { Product, CartProps } from "src/modules/IProducts";

interface IProps {
  item: Product;
}

export const ProductItem: React.FC<IProps> = ({ item }) => {
  const { thumbnail, title, price } = item;

  const [cart, setCart] = useLocalStorageState<CartProps>("cart");

  const addToCart = (): void => {
    item.quantity = 1;

    setCart((prevCart) => ({
      ...prevCart,
      [item.id]: item,
    }));
  };

  const isInCart = (): boolean =>
    Object.keys(cart || {}).includes(item.id.toString());

  return (
    <StyledItem>
      <ImageWrapper>
        <img src={thumbnail} alt="Product image" />
      </ImageWrapper>

      <h3>{title}</h3>
      <p>
        Price: <CurrencyFormatter amount={price} />
      </p>
      <button type="button" onClick={addToCart} disabled={isInCart()}>
        Add to Cart
      </button>
    </StyledItem>
  );
};
