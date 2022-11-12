import Image from "next/image";
import Logo from "../Logo";
import Text from "../../ui-kit/Text";
import { HeaderStyles } from "./styles";
import phone from "../../../public/phone.svg";

const { Container, Inner, DesktopPhoneContainer, MobilePhoneContainer } =
  HeaderStyles;

const Header = () => {
  return (
    <Container>
      <Inner>
        <Logo />
        <DesktopPhoneContainer>
          <Text white>+7 (495) 495-49-54</Text>
        </DesktopPhoneContainer>
        <MobilePhoneContainer>
          <Image src={phone} />
        </MobilePhoneContainer>
      </Inner>
    </Container>
  );
};

export default Header;
