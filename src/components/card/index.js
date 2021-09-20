import React from "react";
import {
  Container,
  Title,
  RowTitle,
  Genre,
  Row,
  Image,
  Item,
  Info,
  Feature,
  Description,
  Maturity,
  PlayButton,
  BigTitle,
  BigDescription,
  Group,
  BigImage,
} from "./styles/Card";

export default function Card({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Card.Row = function CardRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};
Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.RowTitle = function CardRowTitle({ children, ...restProps }) {
  return <RowTitle {...restProps}>{children}</RowTitle>;
};

Card.Image = function CardImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};

Card.Item = function CardItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Card.Info = function CardInfo({ children, ...restProps }) {
  return <Info {...restProps}>{children}</Info>;
};

Card.Description = function CardDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

Card.Feature = function CardFeature({ children, ...restProps }) {
  return (
    <Feature {...restProps}>
      <Group>
        <BigTitle>Man on wire</BigTitle>
        <BigDescription>
          Filmmaker James Marsh masterfully recreates high-wire daredevil
          Philippe Petit's 1974 stunt walking on a wire across the Twin Towers.
        </BigDescription>
        <Maturity>12</Maturity>
        <Genre>Documentaries</Genre>
        <PlayButton>Play</PlayButton>
      </Group>
      <img
        src="/public/images/series/documentaries/man-on-wire/large.jpg"
        alt="man-on-wire"
      />
      {children}
    </Feature>
  );
};
