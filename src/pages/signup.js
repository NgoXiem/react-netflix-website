import React, { useState, useContext } from "react";
import styled from "styled-components/macro";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";
import Form from "../components/form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router";
// import { FirebaseContext } from "../context/firebase";

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

export default function Signup() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const history = useHistory();
  // const { firebase } = useContext(FirebaseContext);

  const isInvalid = username === "" || email === "" || password === "";
  const handleSubmit = (email, password, e) => {
    e.preventDefault();
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // userCredential.user.UserProfile({
        //   displayName: username,
        //   photoURL: Math.floor(Math.random() * 5) + 1,
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
            <Form.Title>Sign Up</Form.Title>
            <Form.Error>{errorMessage}</Form.Error>
            <Form.Base onSubmit={(e) => handleSubmit(email, password, e)}>
              <Form.Input
                type="text"
                placeholder="First name"
                onChange={(e) => setUsername(e.target.value)}
              ></Form.Input>

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

              <Form.Submit disabled={isInvalid} type="submit">
                Sign Up
              </Form.Submit>
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
