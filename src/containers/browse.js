import React, { useState } from "react";
import db from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import Header from "../components/header/index";
import Feature from "../components/feature/index";
import FooterContainer from "../containers/footer";
import logo from "../logo.svg";
import styled from "styled-components/macro";
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";
const Bg = styled.div`
  height: 100%;
  width: 100%;
  background: url("public/images/misc/joker1.jpg");
  background-size: cover;
  background-position: top left;
  background-repeat: no-repeat;
`;

// Read the data from firebase
const getDocument = async (db) => {
  const querySnapshot = await getDocs(collection(db, "series"));
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
  });
};
getDocument(db);

export default function BrowseContainer() {
  const [category, setCategory] = useState("series");
  const history = useHistory();
  const auth = getAuth();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        history.push("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Bg>
        <Header>
          <Header.Wrapper>
            <Header.Group>
              <Header.Link href="/">
                <Header.Logo>
                  <img src={logo} alt="" />
                </Header.Logo>
              </Header.Link>
              <Header.TextLink onClick={() => setCategory("series")}>
                Series
              </Header.TextLink>
              <Header.TextLink onClick={() => setCategory("films")}>
                Films
              </Header.TextLink>
            </Header.Group>
            <Header.Group>
              <Header.Search></Header.Search>
              <Header.Profile>
                <Header.UserImage
                //   src={`/public/images/users/${user.photoURL}.png`}
                ></Header.UserImage>
                <Header.Dropdown>
                  <Header.UserInfo>
                    {/* <p>{user.displayName}</p>
                    <p>{user.email}</p> */}
                  </Header.UserInfo>
                  <Header.Button onClick={() => handleSignout()}>
                    Sign Out
                  </Header.Button>
                </Header.Dropdown>
              </Header.Profile>
            </Header.Group>
          </Header.Wrapper>
        </Header>
        <Feature>
          <Feature.Group>
            <Feature.Heading>Watch Joker Now</Feature.Heading>
            <Feature.Description>
              Forever alone in a crowd, failed comedian Arthur Fleck seeks
              connection as he walks the streets of Gotham City. Arthur wears
              two masks -- the one he paints for his day job as a clown, and the
              guise he projects in a futile attempt to feel like he's part of
              the world around him.
            </Feature.Description>
            <Feature.Button>Play</Feature.Button>
          </Feature.Group>
        </Feature>
      </Bg>
      <FooterContainer></FooterContainer>
    </>
  );
}
