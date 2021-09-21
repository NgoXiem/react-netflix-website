import React from "react";
import {
  Container,
  Wrapper,
  Background,
  TextWrapper,
  Title,
  SubTitle,
  ImgWrapper,
  Heading,
  Description,
  Button,
  Group,
  Gradient,
} from "./styles/Feature";

export default function Feature({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Feature.Wrapper = function FeatureWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Feature.Background = function FeatureBackground({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
};
Feature.ImgWrapper = function FeatureImgWrapper({ children, ...restProps }) {
  return (
    <ImgWrapper {...restProps}>
      <img src="/public/images/misc/bg.jpg" alt="home-bg" />
      <div className="img-gradient"></div>
      {children}
    </ImgWrapper>
  );
};

Feature.TextWrapper = function FeatureTextWrapper({ children, ...restProps }) {
  return <TextWrapper {...restProps}>{children}</TextWrapper>;
};

Feature.Title = function FeatureTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Feature.Group = function FeatureGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};
Feature.Gradient = function FeatureGradient({ children, ...restProps }) {
  return <Gradient {...restProps}>{children}</Gradient>;
};

Feature.Heading = function FeatureHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>;
};

Feature.Description = function FeatureDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

Feature.Button = function FeatureButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
