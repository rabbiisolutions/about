import React from "react";
import presidentJpeg from "../images/carousel/president.jpg";
import presidentWebp from "../images/carousel/president.webp";
import pilotJpeg from "../images/carousel/pilot.jpg";
import pilotWebp from "../images/carousel/pilot.webp";
import engineerJpeg from "../images/carousel/engineer.jpg";
import engineerWebp from "../images/carousel/engineer.webp";
import saxJpeg from "../images/carousel/sax.jpg";
import saxWebp from "../images/carousel/sax.webp";
import photographyJpeg from "../images/carousel/photography.jpg";
import photographyWebp from "../images/carousel/photography.webp";
import ImageWebp from "../helpers/ImageWebp";
import { Zoom } from "react-slideshow-image";
import statement from "../constants/statements";

const images = [
  {jpeg: pilotJpeg, webp: pilotWebp},
  {jpeg: engineerJpeg, webp: engineerWebp},
  {jpeg: saxJpeg, webp: saxWebp},
  {jpeg: photographyJpeg, webp: photographyWebp},
  {jpeg: presidentJpeg, webp: presidentWebp},
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
      <div className="slide-container" id={'start'}>
        <Zoom {...zoomOutProperties}>
          {
            images.map((each, index) => <ImageWebp key={index} style={{width: "100%"}} src={each.jpeg} srcWebp={each.webp} className={'slide-image'}/>)
          }
        </Zoom>
        <div id={'vision'}>{statement.tagLine}</div>
      </div>
  )
};

export default Landing;
