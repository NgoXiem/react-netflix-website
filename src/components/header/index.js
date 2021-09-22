import React, { useState } from "react";
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

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  children,
  ...restProps
}) {
  const [searchActive, setSearchActive] = useState(false);
  return (
    <Search {...restProps}>
      <SearchInput className={searchActive ? "active" : ""}>
        <input
          placeholder="Search movies or series"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchInput>
      <SearchIcon
        onClick={(e) => {
          e.preventDefault();
          setSearchActive((searchActive) => !searchActive);
        }}
      >
        <img src="/public/images/icons/search.png" alt="search" />
      </SearchIcon>
      {children}
    </Search>
  );
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.UserImage = function HeaderUserImage({ children, ...restProps }) {
  return <UserImage {...restProps}>{children}</UserImage>;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.UserInfo = function HeaderUserInfo({ children, ...restProps }) {
  return <UserInfo {...restProps}>{children}</UserInfo>;
};
