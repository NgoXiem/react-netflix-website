import styled from "styled-components/macro";

export const Container = styled.div``;
export const Button = styled.button`
  display: flex;
  flex-direction: row;
  gap: 5px;
  width: fit-content;
  float: none;
  margin-top: 10px;
  white-space: nowrap;
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
  img {
    max-width: 15px;
    filter: brightness(0) invert(1);
  }
`;
export const Modal = styled.div`
  display: none;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: relative;
  z-index: 100;
  &.active {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Inner = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  video {
    width: 400px;
    height: 240px;
  }
`;
