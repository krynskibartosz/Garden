import React from "react";
import Slide from "@material-ui/core/Slide";
import Zoom from "@material-ui/core/Zoom";
import Link from "@material-ui/core/Link";

const SlideMobile = ({ open, info }) => 
    <Slide
      direction="down"
      in={open}
      mountOnEnter
      unmountOnExit
      className="sliderMobile"
    >
      <ul>
        <Zoom
          in={open}
          style={{
            transitionDelay: open ? "500ms" : "0ms",
          }}
        >
          <Link href="#" className="linkMobile">
            {info[0]}
          </Link>
        </Zoom>

        <Zoom
          in={open}
          style={{
            transitionDelay: open ? "700ms" : "0ms",
          }}
        >
          <Link href="#" className="linkMobile">
            {info[1]}
          </Link>
        </Zoom>

        <Zoom
          in={open}
          style={{
            transitionDelay: open ? "900ms" : "0ms",
          }}
        >
          <Link href="#" className="linkMobile">
            {info[2]}
          </Link>
        </Zoom>

        <Zoom
          in={open}
          style={{
            transitionDelay: open ? "1100ms" : "0ms",
          }}
        >
          <Link href="#" className="linkMobile">
            {info[3]}
          </Link>
        </Zoom>
      </ul>
    </Slide>
  

export default SlideMobile;
