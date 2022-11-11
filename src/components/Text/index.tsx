import styled, { css } from "styled-components";
import { IText } from "../../interfaces";

const Text = styled.div<IText>`
  cursor: default;
  font-weight: 500;

  font-style: normal;
  color: ${({ theme, white }) => (white ? theme.white : theme.black)};
  font-size: ${({ small, big }) => (big ? "48px" : small ? "18px" : "24px")};
  ${({ titles }) =>
    titles &&
    css`
      font-family: "Orchidea Pro";
      font-size: 48px;
      line-height: 130%;
      text-transform: uppercase;
      @media (max-width: 750px) {
        font-size: 36px;
      }
      @media (max-width: 500px) {
        font-size: 24px;
      }
    `};
`;

export default Text;
