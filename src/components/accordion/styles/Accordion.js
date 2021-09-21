import styled from "styled-components/macro";

export const Container = styled.ul`
  color: #fff;
  max-width: 815px;
  text-align: center;
  padding: 0;
  margin: 1.25em auto;
  font-weight: 400;
  @media only screen and (min-width: 550px) and (max-width: 949px) {
    width: 90%;
    margin: 1.5em auto;
  }
  @media only screen and (min-width: 950px) and (max-width: 1449px),
    only screen and (min-width: 1450px) {
    width: 75%;
    margin: 2em auto;
    font-size: 26px;
  }
`;
export const Title = styled.h1`
  font-size: 2.5rem;
  line-height: 1.1;
  margin-bottom: 0.5rem;
`;

export const Card = styled.li`
  list-style-type: none;
  margin: 0 0 8px 0;
`;

export const Answer = styled.div`
  display: block;
  text-align: left;
  background: #303030;
  white-space: pre-line;
  span {
    display: inline-block;
    padding: 1.2em;
  }
  &.close {
    max-height: 0;
    overflow: hidden;
  }
  &.open {
    max-height: 1200px;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  }
`;
export const Button = styled.button`
  display: block;
  text-align: left;
  background: #303030;
  padding: 0.8em 2.2em 0.8em 1.2em;
  margin-bottom: 1px;
  font-weight: 400;
  position: relative;
  width: 100%;
  border: 0;
  cursor: pointer;
  color: inherit;
  font-size: inherit;
  img {
    max-width: 20px;
    width: 100%;
    height: auto;
    float: right;
    filter: brightness(0) invert(1);
  }
`;
