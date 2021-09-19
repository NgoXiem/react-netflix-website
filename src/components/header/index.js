import React from "react";
import {
  Container,
  Logo,
  Button,
  Wrapper,
  Link,
  TextLink,
  Group,
  Search,
  Profile,
  UserImage,
  SearchIcon,
  SearchInput,
  Dropdown,
  UserInfo,
} from "./styles/Header";

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Wrapper = function HeaderWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Header.Logo = function HeaderLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>;
};

Header.Button = function HeaderButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Header.Link = function HeaderLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <TextLink {...restProps}>{children}</TextLink>;
};

Header.Search = function HeaderSearch({ children, ...restProps }) {
  return (
    <Search {...restProps}>
      <SearchIcon>
        <img src="/public/images/icons/search.png" alt="search" />
      </SearchIcon>
      <SearchInput></SearchInput>
      {children}
    </Search>
  );
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile>{children}</Profile>;
};

Header.UserImage = function HeaderUserImage({ children, ...restProps }) {
  return <UserImage>{children}</UserImage>;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown>{children}</Dropdown>;
};

Header.UserInfo = function HeaderUserInfo({ children, ...restProps }) {
  return <UserInfo>{children}</UserInfo>;
};
