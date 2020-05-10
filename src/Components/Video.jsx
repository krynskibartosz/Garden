import React from "react";
import video from "../assets/professional-gardening-services-in-london-fantastic-gardeners_xiJZxU80_SD8X.mp4";

const Video = () => (
  <video
    autoPlay
    muted
    loop
    style={{
      position: "absolute",
      width: "100%",
      height: "100vh",
      objectFit: "cover",
      zIndex: "-1",
    }}
  >
    <track kind="caption" />
    <source src={video} type="video/mp4" />
  </video>
);

export default Video;
