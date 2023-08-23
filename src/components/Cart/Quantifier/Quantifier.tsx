import React, { useState } from "react";

import { Container } from "./Quantifier.styled";

export const Quantifier: React.FC = () => {
  const [value, setValue] = useState(1);

  const decrease = () => setValue((prev) => prev - 1);

  const increase = () => setValue((prev) => prev + 1);

  return (
    <Container>
      <input type="button" value="-" onClick={decrease} />
      <span>{value}</span>
      {/* <input type="number" step="1" min="0" max="10" value={value} /> */}
      <input type="button" value="+" onClick={increase} />
    </Container>
  );
};
