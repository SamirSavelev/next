import type { NextPage } from "next";
import { withLayout } from "../layout/Layout";
import Heading from "../src/components/Heading";
import Section from "../src/components/Section";
import img1 from "../public/img1.jpg";
import img2 from "../public/img2.jpg";
import img3 from "../public/img3.jpg";
import img4 from "../public/img4.jpg";
import Text from "../src/ui-kit/Text";
import slide1 from "../public/slides/slide1.jpg";
import slide2 from "../public/slides/slide2.jpg";
import slide3 from "../public/slides/slide3.jpg";
import slide4 from "../public/slides/slide4.jpg";
import slide5 from "../public/slides/slide5.jpg";
import slide6 from "../public/slides/slide6.jpg";
import slide7 from "../public/slides/slide7.jpg";
import slide8 from "../public/slides/slide8.jpg";
import Spacer from "../src/ui-kit/common/Spacer";
import Slider from "../src/components/Slider";

const slidesArray = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
];

const Home: NextPage = () => {
  const title = `Lorem ipsum dolor sit amet, consectetur adipiscing elit`;
  const subtitle = (
    <Text small>
      <p>
        Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum
      </p>
    </Text>
  );

  return (
    <>
      <Heading
        title="ut aliquip ex ea commodo consequat"
        padding={"40px 0 0 0"}
      />
      <Section title={title} subtitle={subtitle} img={img1} />
      <Spacer size={100} />
      <Section title={title} subtitle={subtitle} img={img2} right />
      <Heading title="Lorem ipsum dolor sit amet" />
      <Slider content={slidesArray} />
      <Heading title="ut aliquip ex ea commodo consequat " />
      <Section title={title} subtitle={subtitle} img={img3} />
      <Spacer size={100} />
      <Section title={title} subtitle={subtitle} img={img4} right />
      <Spacer size={160} />
    </>
  );
};

export default withLayout(Home);
