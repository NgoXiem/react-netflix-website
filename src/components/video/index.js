import React, { useState, useContext, createContext } from "react";
import { Container, Button, Modal, Inner } from "./styles/Video";

const VideoContext = React.createContext(null);

export function VideoWrapper({ children, ...restProps }) {
  const [videoActive, setVideoActive] = useState(false);
  return (
    <VideoContext.Provider value={{ videoActive, setVideoActive }}>
      <Container {...restProps}>{children}</Container>
    </VideoContext.Provider>
  );
}

export function Video() {
  const { videoActive } = useContext(VideoContext);
  return (
    <Modal className={videoActive ? "active" : ""}>
      <Inner>
        <video controls muted>
          <source src="public/videos/bunny.mp4" type="video/mp4" />
        </video>
      </Inner>
    </Modal>
  );
}

export function PlayButton({ ...restProps }) {
  const { setVideoActive } = useContext(VideoContext);
  return (
    <Button
      onClick={() =>
        setVideoActive((videoActive) => setVideoActive(!videoActive))
      }
      {...restProps}
    >
      <img src="/public/images/icons/chevron-right.png" alt="chevron-right" />
      <span>Play</span>
    </Button>
  );
}
