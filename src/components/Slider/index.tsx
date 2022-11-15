import Image from "next/image";
import React, { createRef, useEffect } from "react";
import { ISlider } from "../../interfaces";
import { SliderStyles } from "./styles";

const { Container, List, Slide } = SliderStyles;
const Slider: React.FC<ISlider> = ({ content }) => {
  return (
    <Container>
      <List>
        {content.map((slide, index) => {
          return (
            <Slide key={index}>
              <Image src={slide} />
            </Slide>
          );
        })}
      </List>
    </Container>
  );
};

export default Slider;
