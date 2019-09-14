import Logo from "../utils/logo";
import React from "react";
import {
  MDBCol, MDBRow, MDBContainer
} from "mdbreact";


const AboutUs = () => {
  return (
      <MDBContainer className="my-5 pt-5">
        <div className="d-none d-lg-block d-md-block">
          <div className="d-flex justify-content-center mb-5"><Logo height={267}/></div>
        </div>
        <MDBRow>
          <MDBCol md="6">
            <div className="about-title mb-3 bold">Our Mission</div>
            <div className="bold">
              To support people of all ages through use of technology to acquire
              and apply knowledge; either for career, academic progress, or
              their talents, hobbies and interests, anywhere they are and at
              a time of their convenience.
            </div>
            <div className="about-title mb-3 mt-3 mt-lg-5 bold">Our Vision</div>
            <div className="bold mb-3">
              To see education transform the society by empowering them to
              achieve their goals and dreams.
            </div>
          </MDBCol>
          <MDBCol md="6">
            <div className="about-title mb-2 bold">Core Values</div>
            <ol>
              <li className="about-subtitle bold my-2">Totality</li>
              <span className="bold">
                We consider the interests of all our stakeholders and will seek to
                involve them in major decisions affecting them and be a good citizen
                as an organization to the society and the government where we operate.
              </span>
              <li className="about-subtitle bold my-2">Relationship</li>
              <span className="bold">
                To love and care for everyone we deal with, to be available when and
                where they need us, and to give them joy by helping them achieve
                their goals, dreams and desires.
              </span>
              <li className="about-subtitle bold my-2">Innovation and Creativity</li>
              <span className="bold">
                To promote the advancement of Technology and Education by
                developing new, high quality and sustainable solutions to Educational challenges.
              </span>
            </ol>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
  );
};

export default AboutUs;
