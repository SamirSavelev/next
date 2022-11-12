import styled, { css } from "styled-components";

const Container = styled.section<{ right: boolean }>`
  display: flex;
  flex-direction: ${({ right }) => (right ? "row-reverse" : "row")};
  gap: 128px;
  align-items: center;
  @media (max-width: 500px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const ImageContainer = styled.div<{ right: boolean }>`
  max-width: 860px;
  margin-left: ${({ right }) => !right && "-262px"};
  @media (max-width: 500px) {
    margin: 0 -25px 0 -25px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 600px;
`;

export const SectionStyles = { Container, ImageContainer, TitleContainer };
