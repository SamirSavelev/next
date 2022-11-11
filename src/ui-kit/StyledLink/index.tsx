import styled from "styled-components";

export const StyledLink = styled.a`
  cursor: pointer;

  line-height: 130%;

  color: ${({ theme }) => theme.accent};
`;
