import Text from "../Text";
import { FooterStyles } from "./styles";

const { Container } = FooterStyles;

const Footer = () => {
  return (
    <Container>
      <Text white margin="0 0 18px 0" post>
        © TEST, 1022–2022
      </Text>
    </Container>
  );
};

export default Footer;
