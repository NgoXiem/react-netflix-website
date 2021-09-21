import React, { useState, useEffect } from "react";
import db from "../lib/firebase";
import Header from "../components/header/index";
import Feature from "../components/feature/index";
import FooterContainer from "../containers/footer";
import Card from "../components/card";
import logo from "../logo.svg";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const Bg = styled.div`
  height: 100%;
  width: 100%;
  background: url("public/images/misc/joker1.jpg");
  background-size: cover;
  background-position: top left;
  background-repeat: no-repeat;
`;

export default function BrowseContainer({ data }) {
  const [category, setCategory] = useState("series");
  const [userProfile, setUserProfile] = useState({});
  const history = useHistory();
  const auth = getAuth();

  // do something when the user hits SignOut button:
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  // get users' profile from firebase to display it in the UI
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const getUser = async (db) => {
          const docRef = doc(db, "users", uid);
          const docSnap = await getDoc(docRef);
          return docSnap;
        };
        getUser(db)
          .then((docSnap) => {
            setUserProfile(docSnap.data());
          })
          .catch((err) => console.log(err));
      }
    });
  }, [db]);

  return (
    <>
      <Bg>
        <Header>
          <Header.Wrapper>
            <Header.Group>
              <Header.Link href="/browse">
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
                  src={`/public/images/users/${userProfile.photoURL}.png`}
                ></Header.UserImage>
                <Header.Dropdown>
                  <Header.UserInfo>
                    <p>{userProfile.displayName}</p>
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
          <Feature.Gradient></Feature.Gradient>
        </Feature>
      </Bg>
      {data &&
        data[category].map((listItem) => (
          <Card key={category + listItem.title}>
            <Card.RowTitle>{listItem.title}</Card.RowTitle>
            <Card.Row>
              {listItem.data.map((item) => (
                <Card.Item key={item.id} item={item}>
                  <Card.Image
                    src={`/public/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  ></Card.Image>
                  <Card.Info>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Description>{item.description}</Card.Description>
                  </Card.Info>
                </Card.Item>
              ))}
            </Card.Row>
            <Card.Feature category={category}></Card.Feature>
          </Card>
        ))}
      <FooterContainer></FooterContainer>
    </>
  );
}
