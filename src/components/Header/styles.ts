import styled from "styled-components";

const Container = styled.div`
  height: 100px;
  background: ${({ theme }) => theme.blackGradient};
  @media (max-width: 500px) {
    height: 60px;
  }
`;

const Inner = styled.div`
  max-width: 1450px;
  margin: 0 auto 0 auto;
  padding: 35px 25px 29px 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 500px) {
    padding: 20px;
    margin: 0;
  }
`;

const DesktopPhoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 500px) {
    display: none;
  }
`;

const MobilePhoneContainer = styled.div`
  display: none;
  @media (max-width: 500px) {
    display: block;
  }
`;
export const HeaderStyles = {
  Container,
  Inner,
  DesktopPhoneContainer,
  MobilePhoneContainer,
};
