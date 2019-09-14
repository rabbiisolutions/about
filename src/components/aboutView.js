import Logo from "./utils/logo";
import React from "react";


const AboutUs = () => {
  return (
      <div className="about-view">
        <section className="logo-section"><Logo height={267}/></section>
        <section className="about-text">
          <section className="mission">
            <div className="mission">
              <div className="about-title">Our Mission</div>
              <div className="title-description">
                To support people of all ages through use of technology to acquire
                and apply knowledge; either for career, academic progress, or
                their talents, hobbies and interests, anywhere they are and at
                a time of their convenience.
              </div>
            </div>
            <div className="vision">
              <div className="about-title">Our Vision</div>
              <div className="title-description">
                To see education transform the society by empowering them to
                achieve their goals and dreams.
              </div>
            </div>
          </section>
          <section className="core-values">
            <div className="about-title">Core Values</div>
            <ol>
              <li className="about-subtitle">Totality</li>
              <span className="subtitle-description">
                We consider the interests of all our stakeholders and will seek to
                involve them in major decisions affecting them and be a good citizen
                as an organization to the society and the government where we operate.
              </span>
              <li className="about-subtitle">Relationship</li>
              <span className="subtitle-description">
                To love and care for everyone we deal with, to be available when and
                where they need us, and to give them joy by helping them achieve
                their goals, dreams and desires.
              </span>
              <li className="about-subtitle">Innovation and Creativity</li>
              <span className="subtitle-description">
                To promote the advancement of Technology and Education by
                developing new, high quality and sustainable solutions to Educational challenges.
              </span>
            </ol>
          </section>
        </section>
      </div>
  );
};

export default AboutUs;
