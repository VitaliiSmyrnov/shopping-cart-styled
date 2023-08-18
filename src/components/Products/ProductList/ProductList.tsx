import React from "react";

import { ProductItem } from "../ProductItem/ProductItem";

import { Product } from "src/modules/IProducts";

export const ProductList: React.FC = ({ items }) => {
  return (
    <>
      <h1>Products</h1>

      <ul>
        {items.map((item) => (
          <ProductItem key={item.id} item={item}/>
        ))}
      </ul>
    </>
  );
};
