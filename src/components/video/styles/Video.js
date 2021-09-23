import styled from "styled-components/macro";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  &.active {
    z-index: 1000;
  }
`;
export const Button = styled.button`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-top: 10px;
  background-color: #e50914;
  line-height: normal;
  padding: 5px 20px;
  font-weight: 600;
  font-size: 1rem;
  color: #fff;
  border-radius: 3px;
  outline: none;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    margin-top: 0px;
    font-size: 12px;
    padding: 5px 10px;
  }
  &.active {
    display: none;
  }
  img {
    max-width: 15px;
    filter: brightness(0) invert(1);
    @media screen and (max-width: 600px) {
      max-width: 12px;
    }
  }
`;
export const Modal = styled.div`
  display: none;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  &.active {
    display: block;
  }
`;
export const Inner = styled.div`
  position: relative;
  video {
    width: 100%;
    height: auto;
  }
  img {
    position: absolute;
    top: 20px;
    right: 20px;
    filter: brightness(0) invert(1);
    cursor: pointer;
    max-width: 40px;
    @media screen and (max-width: 600px) {
      top: 10px;
      right: 10px;
      max-width: 20px;
    }
  }
`;
