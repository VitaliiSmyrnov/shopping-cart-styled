import React from "react";

import { FooterStyled } from "./Footer.styled";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterStyled>
      <ul>
        <li>
          <a
            href="https://github.com/VitaliiSmyrnov"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>{" "}
          &bull;{" "}
          <a
            href="https://www.linkedin.com/in/vitalii-smyrnov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedIn
          </a>
        </li>

        <li> &copy; 2022 - {currentYear}. All rights reserved.</li>
      </ul>
    </FooterStyled>
  );
};
