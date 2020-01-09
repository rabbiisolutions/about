import relationshipJpeg from "../images/values/relationship 2.jpg";
import relationshipWebp from "../images/values/relationship 2.webp";
import totalityJpeg from "../images/values/totality 2.jpg";
import totalityWebp from "../images/values/totality 2.webp";
import innovationJpeg from "../images/values/innovation 1.jpg";
import innovationWebp from "../images/values/innovation 1.webp";

const totality = {
  title: 'totality',
  text: 'We consider the interests of all \n' +
      'our stakeholders and will seek to \n' +
      'involve them in major decisions \n' +
      'affecting them and be a good \n' +
      'citizen as an organization to the \n' +
      'society and the government \n' +
      'where we operate.',
  jpeg: totalityJpeg,
  webp: totalityWebp
};

const relationship = {
  title: 'relationship',
  text: 'To love and care for everyone we \n' +
      'deal with, to be available when \n' +
      'and where they need us, and to \n' +
      'give them joy by helping them \n' +
      'achieve their goals, dreams and \n' +
      'desires.',
  jpeg: relationshipJpeg,
  webp: relationshipWebp
};

const innovation = {
  title: 'innovation and creativity',
  text: 'To promote the advancement of \n' +
      'Technology and Education by \n' +
      'developing new, high quality and \n' +
      'sustainable solutions to \n' +
      'Educational challenges.',
  jpeg: innovationJpeg,
  webp: innovationWebp
};


let coreValues = {
  totality: totality, innovation: innovation, relationship: relationship
};

export default coreValues;
