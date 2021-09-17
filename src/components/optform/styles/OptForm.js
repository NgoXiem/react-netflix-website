import styled from "styled-components/macro";

export const Form = styled.form`
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    padding: 0 5%;
  }

  @media only screen and (min-width: 950px) and (max-width: 1449px),
    only screen and (min-width: 1450px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 950px;
    padding-top: 0.85rem;
  }
`;
export const Text = styled.h3`
  padding: 0 5%;
  max-width: 450px;
  margin: 0 auto;
  font-weight: 400;
  text-align: center;
  @media only screen and (min-width: 950px) and (max-width: 1449px),
    only screen and (min-width: 1450px) {
    max-width: none;
    padding-bottom: 20px;
    font-size: 1.2rem;
  }
`;
export const Wrapper = styled.div`
  text-align: center;

  @media only screen and (min-width: 950px) and (max-width: 1449px),
    only screen and (min-width: 1450px) {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
  }
`;

export const Input = styled.input`
  padding: 10px 10px;
  width: 80%;
  margin: 0 auto;
  box-sizing: border-box;
  font-size: 16px;
  border: none;
  border-radius: 2px;
  display: block;
  color: #000;
  appearance: none;
  line-height: normal;

  @media screen and (max-width: 9490px) {
    margin: 20px auto;
  }

  @media screen and (min-width: 600px) {
    height: 40px;
  }
  @media only screen and (min-width: 950px) {
    min-width: 450px;
    margin: 0 auto;
    height: 60px !important;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }

  &:focus {
    outline: none;
  }
  &::placeholder {
    font-family: inherit;
  }
`;
export const Button = styled.button`
  font-size: 1rem;
  min-height: 40px;
  max-height: 60px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin: 0.25em auto;
  padding: 0 1em;
  line-height: initial;
  outline: none;
  border: none;
  border-radius: 2px;
  width: fit-content;
  color: #fff;
  background-color: #e50914;
  font-family: inherit;

  @media only screen and (min-width: 950px) {
    font-size: 1.625rem;
    min-height: 60px;
    min-width: 230px;
    border-top-left-radius: 0;
    border-left: 1px solid #333;
    margin: 0 !important;
  }

  img {
    max-width: 20px;
  }
  span {
    padding: 8px 0;
    @media only screen and (min-width: 950px) and (max-width: 1449px),
      only screen and (min-width: 1450px) {
      padding: 0.5rem 0;
    }
  }
`;
