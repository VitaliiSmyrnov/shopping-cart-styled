import React from "react";

import catError from "src/assets/svg/404_Error_with_cat.svg";

import { Wrapper } from "./NotFound.styled";

export const NotFound: React.FC = () => {
  return (
    <Wrapper>
      <img src={catError} alt="Page not found" />
    </Wrapper>
  );
};
