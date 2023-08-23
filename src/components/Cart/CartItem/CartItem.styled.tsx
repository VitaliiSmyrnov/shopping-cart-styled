import styled from "styled-components";

export const StyledItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;

  padding: 10px 20px;

  border-top: 1px dotted;

  h3 {
    flex: 1;
    text-align: center;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100px;
  height: 100px;
`;

export const StyledTrash = styled.button`
  img {
    cursor: pointer;
  }
`;

export const StyledPrice = styled.div`
  min-width: 75px;
  text-align: right;
`;
