import React, { useState } from "react";

import { Container } from "./Quantifier.styled";

import { Operation } from "src/modules/IProducts";

type IProps = {
  productId: number;
  remove: () => void;
  updateQuantity: (productId: number, operation: Operation) => void;
};

export const Quantifier: React.FC<IProps> = ({
  productId,
  remove,
  updateQuantity,
}) => {
  const [value, setValue] = useState(1);

  const decrease = () => {
    updateQuantity(productId, "decrease");

    setValue((prev) => {
      const updatedValue = prev - 1;

      if (updatedValue === 0) {
        remove();
      }

      return updatedValue;
    });
  };

  const increase = () => {
    updateQuantity(productId, "increase");
    setValue((prev) => prev + 1);
  };

  return (
    <Container>
      <input type="button" value="-" onClick={decrease} />
      <span>{value}</span>
      <input type="button" value="+" onClick={increase} />
    </Container>
  );
};
