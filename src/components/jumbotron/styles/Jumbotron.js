import styled from "styled-components";

export const Container = styled.div`
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
export const ImgWrapper = styled.div`
  width: 48%;
  height: 100%;
  display: flex;
  flex: 0 1 auto;
  box-sizing: border-box;
  img {
    max-width: 100%;
    height: auto;
    border: 0;
  }
`;
export const Info = styled.div`
  width: 52%;
  height: 100%;
  flex: 0 1 auto;
  padding: 0 3rem 0 0;

  @media only screen and (min-width: 550px) and (max-width: 949px),
    only screen and (min-width: 400px) and (max-width: 549px),
    only screen and (min-width: 350px) and (max-width: 399px),
    only screen and (max-width: 349px) {
    width: 100%;
    text-align: center;
    padding: 0;
  }

  h1 {
    font-size: 3.125rem;
    line-height: 1.1;
    margin-bottom: 0.5rem;
    margin: 0 0 0.4em;
    @media only screen and (min-width: 400px) and (max-width: 549px),
      only screen and (min-width: 350px) and (max-width: 399px),
      only screen and (max-width: 349px) {
      font-size: 1.625rem;
    }
  }
  h2 {
    font-size: 1.625rem;
    font-weight: 400;
    margin: 0.75em 0 0.25em;
    @media only screen and (min-width: 400px) and (max-width: 549px),
      only screen and (min-width: 350px) and (max-width: 399px),
      only screen and (max-width: 349px) {
      font-size: 1.125rem;
    }
  }
`;
export const Wrapper = styled.div`
  max-width: 1100px;
  display: flex;
  margin: 0 auto;
  flex-direction: ${({ direction }) => direction};
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: 550px) and (max-width: 949px),
    only screen and (min-width: 400px) and (max-width: 549px),
    only screen and (min-width: 350px) and (max-width: 399px),
    only screen and (max-width: 349px) {
    flex-direction: column;
  }
`;
