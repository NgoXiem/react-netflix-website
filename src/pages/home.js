import React from "react";
import FaqContainer from "../containers/faq";
import FooterContainer from "../containers/footer";
import JumbotronContainer from "../containers/jumbotron";
import FeatureContainer from "../containers/feature";

export default function Home() {
  return (
    <>
      <FeatureContainer></FeatureContainer>
      <JumbotronContainer></JumbotronContainer>
      <FaqContainer></FaqContainer>
      <FooterContainer></FooterContainer>
    </>
  );
}
