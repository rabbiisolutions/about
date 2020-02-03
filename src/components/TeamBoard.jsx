import React from "react";
import ImageWebp from "../helpers/ImageWebp";
import teamBoard from "../constants/team-board";

const CircleCard = (props) => {
  return (
      <div className={'circle-card'}>
        <ImageWebp
            src={props.jpeg}
            className={'team-image'}
            alt={props.alt}
        />
        <a className={'name'} href={props.link} target="_blank" rel="noopener noreferrer">{props.name}</a>
        <div className={'title'}>{props.title}</div>
      </div>
  );
};

const TeamBoard = () => {
  return (
    <section>
      <div id={'team'}>
        <h2 className={'section-title'}>Our Team</h2>
        <div className={'col'}>
          <div className={'row'}>
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
          </div>
          <div className={'row'}>
            <CircleCard
                name={teamBoard.cfo.name}
                title={teamBoard.cfo.title}
                jpeg={teamBoard.cfo.jpeg}
                link={teamBoard.cfo.link}
            />
            <CircleCard
                name={teamBoard.cto.name}
                title={teamBoard.cto.title}
                jpeg={teamBoard.cto.jpeg}
                link={teamBoard.cto.link}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamBoard;
