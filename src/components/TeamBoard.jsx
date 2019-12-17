import React from "react";
import ImageWebp from "../helpers/ImageWebp";
import teamBoard from "../constants/team-board";

const CircleCard = (props) => {
  return (
      <div>
        <ImageWebp
            src={props.jpeg}
            className={'team-image'}
            alt={props.alt}
        />
        <div className={'name'}>{props.name}</div>
        <div className={'title'}>{props.title}</div>
      </div>
  );
};

const TeamBoard = () => {
  return (
    <section>
      <div id={'team'}>
        <CircleCard
            name={teamBoard.ceo.name}
            title={teamBoard.ceo.title}
            jpeg={teamBoard.ceo.jpeg}
        />
        <CircleCard
            name={teamBoard.hr.name}
            title={teamBoard.hr.title}
            jpeg={teamBoard.hr.jpeg}
        />
        <CircleCard
            name={teamBoard.cfo.name}
            title={teamBoard.cfo.title}
            jpeg={teamBoard.cfo.jpeg}
        />
        <CircleCard
            name={teamBoard.cto.name}
            title={teamBoard.cto.title}
            jpeg={teamBoard.cto.jpeg}
        />
      </div>
      <div id={'board'}>
        <CircleCard
            name={teamBoard.ceo.name}
            title={teamBoard.ceo.title}
            jpeg={teamBoard.ceo.jpeg}
        />
        <CircleCard
            name={teamBoard.chairman.name}
            title={teamBoard.chairman.title}
            jpeg={teamBoard.chairman.jpeg}
        />
      </div>
    </section>
  );
};

export default TeamBoard;
