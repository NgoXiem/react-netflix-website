import React from "react";
import { Container, Info, Wrapper, ImgWrapper } from "./styles/Jumbotron";

export default function Jumbotron({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Jumbotron.Wrapper = function JumbotronWrapper({
  children,
  direction,
  ...restProps
}) {
  return <Wrapper direction={direction}>{children}</Wrapper>;
};
Jumbotron.ImgWrapper = function JumbotronImgWrapper({
  children,
  ...restProps
}) {
  return <ImgWrapper {...restProps}>{children}</ImgWrapper>;
};

Jumbotron.Info = function JumbotronInfo({ children, ...restProps }) {
  return <Info {...restProps}>{children}</Info>;
};
