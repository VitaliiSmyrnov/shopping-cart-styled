import React from "react";

import { StyledSpan } from "./CurrencyFormatter.styled";

interface IProps {
  amount: number;
}

export const CurrencyFormatter: React.FC<IProps> = ({ amount }) => {
  const formattedAmount = amount.toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP",
  });

  return <StyledSpan>{formattedAmount}</StyledSpan>;
};
