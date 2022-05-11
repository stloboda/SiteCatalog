import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./CardItem.css";

const CardItem = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4200/users/${id}`)
      .then((response) => response.json())
      .then((users) => {
        setUser(users);
      });
  }, [id]);

  return (
    <div className="detail">
      <div className="detail__text">
        <h1>{user.name}</h1>
        <p>{user.email}</p>
      </div>
      <div className="detail__img">{user.img}</div>
    </div>
  );
};

export default CardItem;
