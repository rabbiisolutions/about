import ceoJpeg from "../assets/images/team/martin_jodo.png";
import hrJpeg from "../assets/images/team/glen_magui.png";
import cfoJpeg from "../assets/images/team/solomon_mwabishi.png";
import ctoJpeg from "../assets/images/team/wainaina_gichuhi.png";
import chairmanJpeg from "../assets/images/team/prof_chris_mureithi.png";


const ceo = {
  title: 'CEO',
  name: 'martin jodo',
  jpeg: ceoJpeg,
};

const cfo = {
  title: 'CFO and CMO',
  name: 'solomon mwabishi',
  jpeg: cfoJpeg,
  link: 'https://www.linkedin.com/in/solomon-mwabishi-527800113/'
};

const hr = {
  title: 'HR Manager',
  name: 'glen magui',
  jpeg: hrJpeg,
};

const cio = {
  title: 'CIO',
  name: 'wainaina gichuhi',
  jpeg: ctoJpeg,
  link: 'https://www.linkedin.com/in/wainaina-gichuhi-98615a142/'
};

const chairman = {
  title: 'Chairman',
  name: 'prof. chris mureithi',
  jpeg: chairmanJpeg,
};

let teamBoard = {
  ceo: ceo, cio: cio, cfo: cfo, hr: hr, chairman: chairman
};

export default teamBoard;
