import styled from "styled-components";

const Spacer = styled.div<{ size: number }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: ${({ size }) => `${size}px`};
  @media (max-width: 500px) {
    height: ${({ size }) => `${size * 0.4}px`};
  }
`;

export default Spacer;
