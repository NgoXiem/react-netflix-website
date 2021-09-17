import React from "react";
import FaqContainer from "../containers/faq";
import FooterContainer from "../containers/footer";
import JumbotronContainer from "../containers/jumbotron";
import FeatureContainer from "../containers/feature";
import HeaderContainer from "../containers/header";

export default function Home() {
  return (
    <>
      <HeaderContainer></HeaderContainer>
      <FeatureContainer></FeatureContainer>
      <JumbotronContainer></JumbotronContainer>
      <FaqContainer></FaqContainer>
      <FooterContainer></FooterContainer>
    </>
  );
}
