import React from "react";

import { ProductItem } from "../ProductItem/ProductItem";

import { Container } from "./ProductList.styled";

import { Product } from "src/modules/IProducts";

interface IProps {
  items: Product[];
}

export const ProductList: React.FC<IProps> = ({ items }) => {
  return (
    <Container>
      <h1>Products</h1>

      <ul>
        {items.map((item: Product) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </ul>
    </Container>
  );
};
