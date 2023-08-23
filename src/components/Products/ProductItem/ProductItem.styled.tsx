import styled from "styled-components";

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;

  align-items: center;
  flex-basis: calc(25% - 15px);

  padding-bottom: 5px;

  width: 200px;
  min-height: 250px;

  text-align: center;

  & > :not(:last-child) {
    margin-bottom: 5px;
  }

  p {
    flex: 1;
  }

  button {
    padding: 5px 20px;
    border-radius: 16px;

    background-color: yellow;

    &:disabled {
      opacity: 0.5;
      background-color: lightgray;
      cursor: auto;
    }
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: auto;
    height: 150px;

    object-fit: contain;
  }
`;
