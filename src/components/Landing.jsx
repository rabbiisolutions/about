import React from "react";
import slide1Jpeg from "../images/carousel/slideshow-1.jpg";
import slide1Webp from "../images/carousel/slideshow-1.jpg";
import ImageWebp from "../helpers/ImageWebp";
import { Zoom } from "react-slideshow-image";
import statement from "../constants/statements";

const images = [
  {jpeg: slide1Jpeg, webp: slide1Webp}
];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
};


const Landing = () => {
  return (
      <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {
            images.map((each, index) => <ImageWebp key={index} style={{width: "100%"}} src={each.jpeg} srcWebp={each.webp}/>)
          }
        </Zoom>
        <div id={'vision'}>{statement.vision}</div>
      </div>
  )
};

export default Landing;
