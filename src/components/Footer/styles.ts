import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 200px;
  width: 100%;
  background: ${({ theme }) => theme.black};
`;

export const FooterStyles = { Container };
