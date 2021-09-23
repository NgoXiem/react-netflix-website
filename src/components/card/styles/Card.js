import styled from "styled-components/macro";

export const Container = styled.div`
  color: #fff;
`;
export const RowTitle = styled.h3`
  padding: 0px 45px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 3px;
  @media screen and (max-width: 767px) {
    min-width: 140px;
  }
`;
export const Info = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
export const Title = styled.h5`
  font-size: 12px;
`;
export const Description = styled.p`
  font-size: 10px;
  line-height: normal;
`;
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  flex: 1;
  &:hover {
    z-index: 99;
    transform: scale(1.3);
    ${Info} {
      opacity: 1;
    }
  }
  @media (min-width: 1200px) {
    &:hover ${Info}, &:hover ${Title}, &:hover ${Description} {
      display: block;
      z-index: 100;
    }
  }
  &:first-of-type {
    margin-left: 45px;
    @media (max-width: 600px) {
      margin-left: 15px;
    }
    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }
  &:last-of-type {
    margin-right: 45px;
    @media (max-width: 1000px) {
      margin-right: 30px;
    }
  }
`;
export const Row = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  gap: 5px;
  overflow-x: scroll;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Feature = styled.div`
  position: relative;
`;

export const Close = styled.div`
img {
  position: absolute;
  cursor: pointer;
  top: 20px;
  right: 20px;
  max-width: 40px;
  filter: brightness(0) invert(1);
  @media screen and (max-width: 600px) {
    top: 10px;
    right: 10px;
     max-width: 20px;
  }
  }
  
}`;
export const Genre = styled.span`
  display: inline-block;
  color: #fff;
  font-weight: bold;
  padding: 5px;
  font-size: 13px;
  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`;
export const Maturity = styled.span`
  display: inline-block;
  border-radius: 50%;
  background-color: ${({ maturity }) =>
    maturity >= 15 ? "#e50914" : "#2f9600"};
  color: #fff;
  font-weight: bold;
  padding: 5px;
  font-size: 13px;
  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`;

export const BigTitle = styled.h3`
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;
export const BigDescription = styled.p`
  max-width: 450px;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  margin: 10px 0;
  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`;
export const Group = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  padding-left: 45px;
  @media screen and (max-width: 600px) {
    gap: 0px;
    padding-left: 20px;
    padding-top: 30px;
  }
`;
export const BigImage = styled.div`
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const Inline = styled.div``;
