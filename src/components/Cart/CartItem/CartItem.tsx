import React from "react";

import { Quantifier } from "../Quantifier/Quantifier";
import { CurrencyFormatter } from "src/components";

import trash from "src/assets/svg/trash.svg";

import {
  StyledItem,
  ImageWrapper,
  StyledTrash,
  StyledPrice,
} from "./CartItem.styled";

import { Product, Operation } from "src/modules/IProducts";

type IProps = {
  item: Product;
  remove: () => void;
  update: (productId: number, operation: Operation) => void;
};

export const CartItem: React.FC<IProps> = ({ item, remove, update }) => {
  const { id, thumbnail, title, price } = item;

  console.log("type", typeof id);

  return (
    <StyledItem>
      <ImageWrapper>
        <img src={thumbnail} alt={title} />
      </ImageWrapper>

      <h3>{title}</h3>

      <Quantifier remove={remove} productId={id} updateQuantity={update} />

      <StyledTrash onClick={remove}>
        <img src={trash} alt="Trash can" />
      </StyledTrash>

      <StyledPrice>
        <CurrencyFormatter amount={price} />
      </StyledPrice>
    </StyledItem>
  );
};
