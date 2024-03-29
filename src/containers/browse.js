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
import Fuse from "fuse.js";

// Background
const Bg = styled.div`
  height: 100%;
  width: 100%;
  background: url("public/images/misc/shawshank.jpg");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
`;

export default function BrowseContainer({ data }) {
  const [category, setCategory] = useState("films");
  const [userProfile, setUserProfile] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [list, setList] = useState([]);
  const history = useHistory();
  const auth = getAuth();

  // get data based on whether user clicked on series or films
  useEffect(() => {
    data && setList(data[category]);
  }, [data, category]);

  // live search with fuse
  useEffect(() => {
    const fuse = new Fuse(list, {
      keys: ["data.title", "data.genre", "data.description", "data.maturity"],
    });

    const results = fuse.search(searchTerm);
    const itemResults = searchTerm
      ? results.map((result) => result.item)
      : list;
    if (itemResults.length > 0) {
      setList(itemResults);
    }
  }, [searchTerm]);

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
              <Header.Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              ></Header.Search>
              <Header.Profile>
                <Header.UserImage
                  src={`/public/images/users/${userProfile.photoURL}.png`}
                ></Header.UserImage>
                <Header.Dropdown>
                  <Header.UserInfo>
                    <p>{userProfile.displayName}</p>
                  </Header.UserInfo>
                  <Header.Button
                    onClick={() => {
                      handleSignout();
                      localStorage.removeItem("user");
                    }}
                  >
                    Sign Out
                  </Header.Button>
                </Header.Dropdown>
              </Header.Profile>
            </Header.Group>
          </Header.Wrapper>
        </Header>
        <Feature>
          <Feature.Group>
            <Feature.Heading>
              Watch The Shawshank Redemption Now
            </Feature.Heading>
            <Feature.Description>
              Two imprisoned men bond over a number of years, finding solace and
              eventual redemption through acts of common decency.
            </Feature.Description>
            <Feature.Button>Play</Feature.Button>
          </Feature.Group>
          <Feature.Gradient></Feature.Gradient>
        </Feature>
      </Bg>
      {list &&
        list.map((listItem) => (
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
