import React from "react";
import Icon from "./basic/Icon";
import bulb from "../assets/icons/idea.svg"
import texts from "../constants/texts";
import landingJ from "../assets/images/landing.jpg";
import landingW from "../assets/images/landing.webp";
import ImageWebp from "../helpers/ImageWebp";

function Landing() {
  return (
      <header  id={"landing-image"}>
        <ImageWebp
            src={landingJ}
            srcWebp={landingW}
            className={'landing-image'}
            alt={'joyous-student'}
        />
        <div id="slogan">
          <Icon src={bulb} height={8} width={8} units={'vw'} className={'idea'}/>
          <span className="text">{texts.slogan}</span>
        </div>
      </header>
  );
}

// Exporting the component
export default Landing;
