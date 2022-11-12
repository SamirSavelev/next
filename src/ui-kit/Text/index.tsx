import styled, { css } from "styled-components";
import { IText } from "../../interfaces";

const Text = styled.div<IText>`
  cursor: default;
  font-weight: 500;

  font-style: normal;
  color: ${({ theme, white }) => (white ? theme.white : theme.black)};
  font-size: 24px;
  white-space: pre-wrap;
  margin: ${({ margin }) => (margin ? margin : 0)};
  ${({ upper }) =>
    upper &&
    css`
      text-transform: uppercase;
    `}

  ${({ big }) =>
    big &&
    css`
      font-size: 48px;
      line-height: 110%;
    `}
    ${({ small }) =>
    small &&
    css`
      font-size: 18px;
      line-height: 130%;
      @media (max-width: 500px) {
        font-size: 14px;
      }
    `}
    ${({ titles }) =>
    titles &&
    css`
      font-family: "Orchidea Pro";
      font-size: 48px;
      line-height: 130%;
      @media (max-width: 750px) {
        font-size: 36px;
      }
      @media (max-width: 500px) {
        font-size: 24px;
      }
    `};
  ${({ post }) =>
    post &&
    css`
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 14px;
    `}
`;

export default Text;
