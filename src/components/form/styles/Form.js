import styled from "styled-components/macro";

export const Container = styled.div`
  color: #333;
  margin: 0 auto;

  @media screen and (max-width: 739px) {
    border-bottom: 1px solid #8c8c8c;
    padding: 0 45px;
  }
  @media screen and (min-width: 740px) {
    max-width: 450px;
    margin: 0 auto 30px auto;
    min-height: 60vh;
    background-color: transparent;
`;

export const Wrapper = styled.div`
  margin-top: 60px;
  padding: 30px 0 30px;
  width: 100%;
  border-radius: 5px;
  @media screen and (min-width: 740px) {
    background-color: rgba(0, 0, 0, 0.75);
    padding: 60px 68px 40px;
    margin-bottom: 90px;
    min-height: 560px;
  }
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  padding-left: 15px;
  color: #fff;
  background: #333;
  margin-bottom: 16px;
  min-height: 50px;
  outline: none;
  border: none;
  border-radius: 5px;
`;
export const Submit = styled.button`
  color: #fff;
  min-height: 50px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  margin: 24px 0;
  background: #e50914;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  @media only screen and (min-width: 360px) {
    width: 100%;
    max-width: 100%;
  }
  @media only screen and (min-width: 500px) {
    padding: 16px;
    font-size: 18px;
  }
  &:disabled {
    opacity: 0.5;
  }
`;
export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 25px 0;
  padding: 0;
  @media screen and (min-width: 740px) {
    margin-bottom: 28px;
  }
`;
export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
export const TextSmall = styled.p`
  margin-top: 11px;
  margin-bottom: 20px;
  font-size: 13px;
  color: #8c8c8c;
`;
export const Error = styled.p`
  color: #e87c03;
  margin-bottom: -6px;
  padding: 0px 3px 20px 3px;
  font-size: 13px;
`;
