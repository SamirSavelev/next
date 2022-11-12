import Image from "next/image";
import React from "react";
import { ISection } from "../../interfaces";
import Text from "../../ui-kit/Text";
import { SectionStyles } from "./styles";

const { Container, ImageContainer, TitleContainer } = SectionStyles;

const Section: React.FC<ISection> = ({
  right = false,
  title,
  subtitle,
  img,
}) => {
  return (
    <Container right={right}>
      <ImageContainer right={right}>
        <Image src={img} />
      </ImageContainer>
      <TitleContainer>
        <Text titles>{title}</Text>
        {subtitle}
      </TitleContainer>
    </Container>
  );
};

export default Section;
