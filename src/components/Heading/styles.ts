import styled from "styled-components";

const Container = styled.div<{ padding?: string }>`
  margin: 160px 0 129px 0;
  padding: ${({ padding }) => padding && padding};
  @media (max-width: 500px) {
    margin: 72px 0 64px 0;
  }
`;

export const HeadingStyles = { Container };
