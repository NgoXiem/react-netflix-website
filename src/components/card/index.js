import React, { createContext, useState, useContext } from "react";
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
  BigTitle,
  BigDescription,
  Group,
  BigImage,
  Close,
  Inline,
} from "./styles/Card";
import { Video, PlayButton, VideoWrapper } from "../video/index";

export const FeatureContext = createContext();

export default function Card({ children, ...restProps }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});
  return (
    <FeatureContext.Provider
      value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
    >
      <Container {...restProps}>{children}</Container>;
    </FeatureContext.Provider>
  );
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

Card.Item = function CardItem({ item, children, ...restProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);
  return (
    <Item
      onClick={() => {
        setShowFeature(true);
        setItemFeature(item);
      }}
      {...restProps}
    >
      {children}
    </Item>
  );
};

Card.Info = function CardInfo({ children, ...restProps }) {
  return <Info {...restProps}>{children}</Info>;
};

Card.Description = function CardDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

Card.Feature = function CardFeature({ category, children, ...restProps }) {
  const { itemFeature, showFeature, setShowFeature } =
    useContext(FeatureContext);

  return showFeature ? (
    <Feature {...restProps}>
      <Group>
        <BigTitle>{itemFeature.title}</BigTitle>
        <BigDescription>{itemFeature.description}</BigDescription>
        <Inline>
          <Maturity maturity={itemFeature.maturity}>
            {itemFeature.maturity}
          </Maturity>
          <Genre>
            {itemFeature.genre.charAt(0).toUpperCase() +
              itemFeature.genre.slice(1)}
          </Genre>
        </Inline>
      </Group>
      <VideoWrapper>
        <Video></Video>
        <PlayButton></PlayButton>
      </VideoWrapper>
      <BigImage>
        <img
          src={`/public/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
          alt={itemFeature.slug}
        />
      </BigImage>
      <Close onClick={() => setShowFeature(false)}>
        <img src="/public/images/icons/close.png" alt="close" />
      </Close>
      {children}
    </Feature>
  ) : null;
};
