import React from "react";
import Feature from "../components/feature";
import OptForm from "../components/optform";

export default function FeatureContainer() {
  return (
    <Feature>
      <Feature.Wrapper>
        <Feature.Background>
          <Feature.ImgWrapper></Feature.ImgWrapper>
        </Feature.Background>
        <Feature.TextWrapper>
          <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>

          <OptForm>
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
            <OptForm.Wrapper>
              <OptForm.Input></OptForm.Input>
              <OptForm.Button></OptForm.Button>
            </OptForm.Wrapper>
          </OptForm>
        </Feature.TextWrapper>
      </Feature.Wrapper>
    </Feature>
  );
}
