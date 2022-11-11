import styled from "styled-components";

const LogoDesktop = styled.div`
  display: block;
  @media (max-width: 450px) {
    display: none;
  }
`;

const LogoMobile = styled.div`
  display: none;
  @media (max-width: 450px) {
    display: block;
  }
`;

export const LogoStyles = { LogoDesktop, LogoMobile };
