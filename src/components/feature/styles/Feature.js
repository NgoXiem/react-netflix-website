import styled from "styled-components/macro";

export const Container = styled.div`
  margin: 0 auto;
`;
export const Wrapper = styled.div`
  position: relative;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  margin-bottom: 0;
  background: 0 0;
  color: #fff;
  @media only screen and (min-width: 550px) and (max-width: 949px),
    only screen and (min-width: 950px) and (max-width: 1449px),
    only screen and (min-width: 1450px) {
    padding: 70px 45px;
  }
`;

export const Background = styled.div`
  z-index: 0;
  position: absolute;
  top: -70px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  @media only screen and (min-width: 950px) and (max-width: 1449px),
    only screen and (min-width: 1450px) {
    top: -100px;
  }
`;

export const ImgWrapper = styled.div`
  bottom: 0;
  height: 750px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: none;
  }
  div.img-gradient {
    background: rgba(0, 0, 0, 0.4);
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0.8) 100%
    );
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
`;

export const TextWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 75px 0;
  max-width: 950px;
  margin: 0 auto;
  text-align: center;
  z-index: 1;
`;
export const Title = styled.h1`
  padding: 0 5%;
  max-width: 640px;
  margin: 0 auto;
  font-size: 1.75rem;
  line-height: 1.1;
  margin-bottom: 0.5rem;

  @media only screen and (min-width: 550px) and (max-width: 949px) {
    font-size: 3.125rem;
  }

  @media only screen and (min-width: 950px) and (max-width: 1449px) {
    font-size: 3.125rem;
  }

  @media screen and (min-width: 1450px) {
    font-size: 4rem;
  }

  @media only screen and (min-width: 1450px) {
    max-width: 800px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1.125rem;
  margin: 1rem auto;
  font-weight: 400;
  @media only screen and (min-width: 550px) and (max-width: 949px) {
    font-size: 1.625rem;
  }
  @media only screen and (min-width: 950px) and (max-width: 1449px),
    only screen and (min-width: 1450px) {
    font-size: 1.625rem;
  }

  @media only screen and (min-width: 1450px) {
    max-width: 800px;
  }
`;

export const Group = styled(Wrapper)`
  border-bottom: none;
  min-height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Heading = styled.h1``;
export const Description = styled.p`
  margin-bottom: 25px;
  max-width: 610px;
  font-size: 1em;
`;
export const Button = styled.button`
  width: fit-content;
  background-color: #fff;
  line-height: normal;
  padding: 5px 30px;
  font-weight: 600;
  font-size: 1rem;
  color: black;
  border: none;
  outline: none;
  border-radius: 3px;
  &:hover {
    background-color: #e50914;
    color: #fff;
    transition: all 0.3s ease-in-out;
  }
`;
