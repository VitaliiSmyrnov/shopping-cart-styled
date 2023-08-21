import React from "react";

import { CurrencyFormatter } from "src/components";

import { StyledItem, ImageWrapper } from "./ProductItem.styled";

import { Product } from "src/modules/IProducts";

interface IProps {
  item: Product;
}

export const ProductItem: React.FC<IProps> = ({ item }) => {
  const { thumbnail, title, price } = item;

  return (
    <StyledItem>
      <ImageWrapper>
        <img src={thumbnail} alt="Product image" />
      </ImageWrapper>

      <h3>{title}</h3>
      <p>
        Price: <CurrencyFormatter amount={price} />
      </p>
      <button type="button">Add to Cart</button>
    </StyledItem>
  );
};
