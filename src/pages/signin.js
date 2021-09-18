import React, { useState } from "react";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";
import Form from "../components/form";
import styled from "styled-components/macro";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router";

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
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const isInvalid = email === "" || password === "";

  const handleSignin = (email, password, e) => {
    e.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        //const user = userCredential.user;
        history.push("/browse");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <>
      <Background>
        <HeaderContainer></HeaderContainer>
        <Form>
          <Form.Wrapper>
            <Form.Title>Sign In</Form.Title>
            <Form.Error>{errorMessage}</Form.Error>
            <Form.Base onSubmit={(e) => handleSignin(email, password, e)}>
              <Form.Input
                type="text"
                placeholder="Email or Phone number"
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Input>
              <Form.Input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Input>
              <Form.Submit type="submit" disabled={isInvalid}>
                Sign In
              </Form.Submit>
            </Form.Base>

            <Form.Text>
              New to NetFlix? <a href="/signup">Sign up now</a>.
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
