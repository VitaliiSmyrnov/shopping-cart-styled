import React from "react";

import { Quantifier } from "../Quantifier/Quantifier";
import { CurrencyFormatter } from "src/components";

import trash from "src/assets/svg/trash.svg";

import { StyledItem, ImageWrapper, StyledTrash } from "./CartItem.styled";

import { Product } from "src/modules/IProducts";

type IProps = {
  item: Product;
};

export const CartItem: React.FC<IProps> = ({ item }) => {
  const { thumbnail, title, price } = item;

  return (
    <StyledItem>
      <ImageWrapper>
        <img src={thumbnail} alt={title} />
      </ImageWrapper>

      <h3>{title}</h3>

      <Quantifier />

      <StyledTrash>
        <img src={trash} alt="Trash can" />
      </StyledTrash>

      <span>
        <CurrencyFormatter amount={price} />
      </span>
    </StyledItem>
  );
};
