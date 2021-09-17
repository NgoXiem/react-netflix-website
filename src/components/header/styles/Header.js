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
`;
