import type { NextPage } from "next";
import { withLayout } from "../layout/Layout";
import Heading from "../src/components/Heading";

const Home: NextPage = () => {
  return (
    <>
      <Heading />
    </>
  );
};

export default withLayout(Home);
