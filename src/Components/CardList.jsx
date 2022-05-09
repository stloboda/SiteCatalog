import React from "react";
import "./CardList.css";
import { Link } from "react-router-dom";

const CardList = (props) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={props.user.img} />
      </div>
      <div className="card__desc">
        <div className="card__title">
          <h3>{props.user.name}</h3>
        </div>
        <div className="card__body">
          <p>{props.user.email}</p>
        </div>
      </div>
      <div className="card__btn">
        <button>
          <Link to={`/catalog/${props.user.id}`}>View more</Link>
        </button>
      </div>
    </div>
  );
};

export default CardList;
