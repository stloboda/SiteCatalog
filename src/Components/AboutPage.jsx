import React from "react";
import about from "../img/image.png";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <section className="about" id="about">
      <div className="content">
        <img src={about} height={350} />
        <div className="about-text">
          <h1>About us</h1>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </h3>
          <button className="btn-about" type="button">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
