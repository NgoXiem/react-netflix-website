import React, { useState, useContext, createContext } from "react";
import { Container, Button, Modal, Inner } from "./styles/Video";

const VideoContext = React.createContext(null);

export function VideoWrapper({ children, ...restProps }) {
  const [videoActive, setVideoActive] = useState(false);
  return (
    <VideoContext.Provider value={{ videoActive, setVideoActive }}>
      <Container {...restProps} className={videoActive ? "active" : ""}>
        {children}
      </Container>
    </VideoContext.Provider>
  );
}

export function Video() {
  const { videoActive, setVideoActive } = useContext(VideoContext);
  return (
    <Modal className={videoActive ? "active" : ""}>
      <Inner>
        <video controls muted autoPlay>
          <source src="public/videos/bunny.mp4" type="video/mp4" />
        </video>
        <img
          src="public/images/icons/close.png"
          alt="close"
          onClick={() => setVideoActive(false)}
        />
      </Inner>
    </Modal>
  );
}

export function PlayButton({ ...restProps }) {
  const { videoActive, setVideoActive } = useContext(VideoContext);
  return (
    <Button
      onClick={() => setVideoActive(true)}
      {...restProps}
      className={videoActive ? "active" : ""}
    >
      <img src="/public/images/icons/chevron-right.png" alt="chevron-right" />
      <span>Play</span>
    </Button>
  );
}
