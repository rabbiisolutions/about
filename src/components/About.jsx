import React from "react";
import statement from "../constants/statements";
import coreValues from "../constants/core-values";
import ImageWebp from "../helpers/ImageWebp";

const Card = (props) => {
  return (
    <div className={'card'}>
      <ImageWebp
          src={props.jpeg}
          srcWebp={props.webp}
          className={'card-image'}
          alt={props.alt}
      />
      <div className={'value-title'}>{props.title}</div>
      <hr className={'divider'}/>
      <div className="value-desc">{props.text}</div>
    </div>
  );
};

const About = () => {
  return (
    <section id={'about'}>
      <h2 className={'section-title'}>About Rabbi TS</h2>
      <div id={'statement'}>
        <p>
          <span id={'focus'}>{statement.mission.start}</span>
          {statement.mission.end}
        </p>
        <p>
          {statement.about[0]}
        </p>
        <p>
          <span>{statement.about[1]}</span>
          {statement.about[2]}
        </p>
        <p>
          {statement.about[3]}
        </p>
      </div>
      <div id={'core-values'}>
        <Card
            jpeg={coreValues.totality.jpeg}
            webp={coreValues.totality.webp}
            alt={'totality-image'}
            text={coreValues.totality.text}
            title={coreValues.totality.title}
        />
        <Card
            jpeg={coreValues.relationship.jpeg}
            webp={coreValues.relationship.webp}
            alt={'relationship-image'}
            text={coreValues.relationship.text}
            title={coreValues.relationship.title}
        />
        <Card
            jpeg={coreValues.innovation.jpeg}
            webp={coreValues.innovation.webp}
            alt={'innovation-image'}
            text={coreValues.innovation.text}
            title={coreValues.innovation.title}
        />
      </div>
    </section>
  );
};

export default About;
