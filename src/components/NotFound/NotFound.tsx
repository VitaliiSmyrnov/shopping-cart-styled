import React from "react";

import error from "src/assets/svg/404_Error_with_people.svg";

import { Wrapper } from "./NotFound.styled";

export const NotFound: React.FC = () => {
  return (
    <Wrapper>
      <img src={error} alt="Page not found" />
    </Wrapper>
  );
};
