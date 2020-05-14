import React from "react";
import Slide from "@material-ui/core/Slide";

const SlideMobile = ( { open, info }) => <Slide direction="down" in={open} mountOnEnter unmountOnExit className="sliderMobile">
            <ul>
            {info.map(item => <li className="linkMobile" key={item}>{item}</li>)}
            </ul>
        </Slide>


export default SlideMobile