import React, { FC } from "react";
import Header from "../src/components/Header";
import { LayoutProps } from "./Layout.props";
import { Container, MainContainer } from "./styles";

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <MainContainer>
      <Header />
      <Container>{children}</Container>
    </MainContainer>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FC<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
