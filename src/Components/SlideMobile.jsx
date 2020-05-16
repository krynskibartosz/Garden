import React from "react";
import Slide from "@material-ui/core/Slide";
import Zoom from "@material-ui/core/Zoom";


const SlideMobile = ( { open, info }) => <Slide direction="down" in={open} mountOnEnter unmountOnExit className="sliderMobile">
                <ul>
      <Zoom in={open} style={{ transitionDelay: open ? "500ms" : "0ms" }}>
        <li>
          <a className="linkMobile" href="#">{info[0]}</a>
        </li>
      </Zoom>
      <Zoom in={open} style={{ transitionDelay: open ? "700ms" : "0ms" }}>
        <li>
          <a className="linkMobile" href="#">{info[1]}</a>
        </li>
      </Zoom>
      <Zoom in={open} style={{ transitionDelay: open ? "900ms" : "0ms" }}>
        <li>
          <a className="linkMobile" href="#">{info[2]}</a>
        </li>
      </Zoom>
      <Zoom in={open} style={{ transitionDelay: open ? "1100ms" : "0ms" }}>
        <li>
          <a className="linkMobile" href="#">{info[3]}</a>
        </li>
      </Zoom>
    </ul>

        </Slide>


export default SlideMobile