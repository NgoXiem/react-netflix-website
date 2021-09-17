import React from "react";
import Header from "../components/header/index";
import logo from "../logo.svg";

export default function HeaderContainer() {
  return (
    <Header>
      <Header.Wrapper>
        <Header.Logo>
          <img src={logo} alt="" />
        </Header.Logo>
        <Header.Button href="/login">Sign In</Header.Button>
      </Header.Wrapper>
    </Header>
  );
}
