import React from "react";
import { IHeading } from "../../interfaces";
import Text from "../../ui-kit/Text";
import { HeadingStyles } from "./styles";

const { Container } = HeadingStyles;

const Heading: React.FC<IHeading> = ({ title, padding = "0" }) => {
  return (
    <Container padding={padding}>
      <Text titles upper>
        {title}
      </Text>
    </Container>
  );
};

export default Heading;
