import React from "react";
import Jumbotron from "../components/jumbotron/index";
import data from "../fixture/jumbo.json";

export default function JumbotronContainer() {
  return (
    <>
      {data.map((item) => (
        <Jumbotron>
          <Jumbotron.Wrapper key={item.id} direction={item.direction}>
            <Jumbotron.Info>
              <h1>{item.title}</h1>
              <h2>{item.subTitle}</h2>
            </Jumbotron.Info>
            <Jumbotron.ImgWrapper>
              <img src={item.image} alt={item.alt} />
            </Jumbotron.ImgWrapper>
          </Jumbotron.Wrapper>
        </Jumbotron>
      ))}
    </>
  );
}
