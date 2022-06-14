import React from "react";
import main from "../img/help_ukr.png";
import "./TitlePage.css";

const TitlePage = () => {
  return (
    <div className="title">
      <div className="title__img">
        <img src={main} className="img__sup" height={350} />
      </div>
      <div className="title__text">
        <h1 className="title__text-h1">
          Stands with Ukraine. We invite you to do the same. Here are some ways
          you can help: #WeStandWithUkraine
        </h1>
      </div>
    </div>
  );
};

export default TitlePage;
