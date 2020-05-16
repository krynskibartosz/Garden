import React, { useState } from "react";
import Slide from "@material-ui/core/Slide";
import Zoom from "@material-ui/core/Zoom";
import Link from "@material-ui/core/Link";

const SlideMobile = ({ open, info }) => {
  // const arr = [];
  const [timing, setTiming] = useState(500);
  return (
    <Slide
      direction="down"
      in={open}
      mountOnEnter
      unmountOnExit
      className="sliderMobile"
    >
      <ul>
        {info.map((item) => (
          <Zoom
            key={item}
            in={open}
            style={{
              transitionDelay: open
                ? (() => setTiming(timing + 200), `${timing - 100}ms`)
                : "0ms",
            }}
          >
            <Link href="#" className="linkMobile">
              {item}
            </Link>
          </Zoom>
        ))}
      </ul>
    </Slide>
  );
};

export default SlideMobile;
