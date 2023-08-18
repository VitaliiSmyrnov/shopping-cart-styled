import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 44px;

  padding-left: 20px;
  padding-right: 20px;

  background-color: #58468f62;
`;

export const LogoWrapper = styled.div`
  /* width: 24px;
  height: 24px; */
`;

export const CartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  span {
    font-size: 20px;
    /* font-weight: bold; */
    line-height: 1;

    color: orangered;
  }
`;
