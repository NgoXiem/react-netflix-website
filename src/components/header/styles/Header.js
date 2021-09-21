import styled from "styled-components/macro";

export const Container = styled.div`
  background-color: transparent;
  transition: background-color 0.5s;
  position: relative;
  max-width: 1920px;
  margin: 0 auto;
  padding-top: 20px;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 5rem;
  z-index: 10;
  color: #fff;

  @media only screen and (min-width: 550px) and (max-width: 949px),
    only screen and (min-width: 400px) and (max-width: 549px),
    only screen and (min-width: 350px) and (max-width: 399px),
    only screen and (max-width: 349px) {
    height: 45px;
  }
  @media only screen and (min-width: 950px) and (max-width: 1449px) {
    height: 4rem;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  margin: 0 3.5rem;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 0.5rem;
  height: auto;
`;

export const Logo = styled.span`
  img {
    max-height: 30px;
  }
`;
export const Button = styled.a`
  float: none;
  margin-top: 0;
  white-space: nowrap;
  background-color: #e50914;
  line-height: normal;
  padding: 7px 17px;
  font-weight: 400;
  font-size: 1rem;
  color: #fff;
  border-radius: 3px;
  text-decoration: none;
  cursor: pointer;
`;

export const Link = styled.a`
  text-decoration: none;
`;

export const TextLink = styled.button`
  border: none;
  background-color: black;
  color: #fff;
  font-weight: 400;
  font-size: 1rem;
  cursor: pointer;
  background: transparent;
  &:hover {
    text-decoration: underline;
  }
`;
export const Group = styled.div`
  display: flex;
  gap: 20px;
`;
export const SearchInput = styled.input`
  padding: 3px 5px;
  outline: none;
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
export const UserInfo = styled.div``;

export const Search = styled.form`
  // padding-bottom: 10px;
  ${SearchInput} {
    transform: scaleX(0);
    transform-origin: top right;
    transition: transform 0.3s ease;
  }
  &:hover {
    ${SearchInput} {
      transform: scaleX(100%);
    }
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  bottom: -110%;
  left: -30px;
  opacity: 0;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 400;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0.75);
  padding: 10px;
  border-radius: 5px;
`;
export const Profile = styled.div`
  position: relative;
  max-width: 30px;
  max-height: 30px;

  &:hover {
    ${Dropdown} {
      display: flex;
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
export const UserImage = styled.img`
  max-width: 30px;
  max-height: 30px;
  cursor: pointer; ;
`;
export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: 0;
  height: 32px;
  width: 32px;
  padding: 0;
  cursor: pointer;
  img {
    filter: brightness(0) invert(1);
    width: 20px;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
