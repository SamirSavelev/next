import Image from "next/image";
import React, { ForwardedRef } from "react";
import logo from "../../../public/logo.svg";
import { StyledLink } from "../../ui-kit/StyledLink";
import { LogoStyles } from "./styles";

const { LogoDesktop, LogoMobile } = LogoStyles;
const Logo = React.forwardRef((props, ref: ForwardedRef<HTMLAnchorElement>) => {
  return (
    <StyledLink ref={ref} {...props}>
      <LogoDesktop>
        <Image src={logo} height={36} />
      </LogoDesktop>
      <LogoMobile>
        <Image src={logo} height={20} width={119} />
      </LogoMobile>
    </StyledLink>
  );
});

Logo.displayName = "Logo";

export default Logo;
