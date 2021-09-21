import styled from "styled-components/macro";

export const Container = styled.div`
  color: #fff;
  padding: 0px 45px;
`;
export const RowTitle = styled.h3``;

export const Image = styled.img`
  width: 100%;
  height: auto;
  width: 250px;
  cursor: pointer;
  border-radius: 3px;
`;
export const Info = styled.div`
  position: absolute;
  max-width: 300px;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0px 5px 10px 5px;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: all 0.2s ease-in-out;
`;
export const Item = styled.div`
  position: relative;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
    ${Info} {
      opacity: 1;
    }
  }
`;
export const Row = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  overflow-x: scroll;
  overflow-y: hidden;
`;
export const Feature = styled.div`
  position: relative;
`;
export const Description = styled.p`
  font-size: 0.6rem;
  line-height: 15px;
  letter-spacing: 0.8px;
`;
export const Title = styled.h5``;
export const Genre = styled.span`
  display: inline-block;
`;
export const Maturity = styled.span`
  display: inline-block;
`;
export const PlayButton = styled.button``;
export const BigTitle = styled.h3``;
export const BigDescription = styled.p`
  max-width: 400px;
  font-size: 1rem;
`;
export const Group = styled.div`
  position: absolute;
  top: 0;
  left: 0px;
`;
export const BigImage = styled.image`
  width: 100%;
  height: auto;
`;
