import React from "react";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";
import Form from "../components/form";
// import Background from "../components/background";
import styled from "styled-components/macro";

const Background = styled.div`
  height: 100%;
  width: 100%;
  background-image: url("/public/images/misc/home-bg.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (max-width: 749px) {
    background: black;
  }
`;
const FooterBg = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
`;

export default function Signin() {
  return (
    <>
      <Background>
        <HeaderContainer></HeaderContainer>
        <Form>
          <Form.Wrapper>
            <Form.Title>Sign Up</Form.Title>
            <Form.Base>
              <Form.Input type="text" placeholder="First name"></Form.Input>
              <Form.Error>I am an first-name error!</Form.Error>
              <Form.Input
                type="text"
                placeholder="Email or Phone number"
              ></Form.Input>
              <Form.Error>I am an error!</Form.Error>
              <Form.Input type="password" placeholder="Password"></Form.Input>
              <Form.Error>I am another error!</Form.Error>
              <Form.Submit>Sign Up</Form.Submit>
            </Form.Base>

            <Form.Text>
              Already a user? <a href="/login">Sign in now</a>.
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </Form.TextSmall>
          </Form.Wrapper>
        </Form>
        <FooterBg>
          <FooterContainer></FooterContainer>
        </FooterBg>
      </Background>
    </>
  );
}
