import styled, { css } from "styled-components";
import { IText } from "../../interfaces";

const Text = styled.div<IText>`
  cursor: default;
  font-weight: 500;
  color: ${({ theme, white }) => (white ? theme.white : theme.black)};
  font-size: ${({ small, big }) => (big ? "48px" : small ? "18px" : "24px")};
  ${({ title }) => title && css``};
  ${({ subtitle }) =>
    subtitle &&
    css`
      font-family: "Manrope", sans-serif;
    `}
`;

export default Text;
