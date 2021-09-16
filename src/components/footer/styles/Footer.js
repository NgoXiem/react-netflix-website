import styled from "styled-components/macro";

export const Container = styled.div`
  font-size: 13px;
  padding: 70px 45px 20px 45px;
  max-width: 1000px;
`;
export const Text = styled.p`
  color: #757575;
  margin: 24px 0 13px 0;
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 20px;
  margin: 30px auto;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: fit-content;
`;
export const Link = styled.a`
  color: #757575;
  background-color: transparent;
  text-decoration: none;
  font-size: 13px;
  &:hover {
    text-decoration: underline;
  }
`;

export const TopLink = styled(Link)`
  font-size: 16px;
`;
