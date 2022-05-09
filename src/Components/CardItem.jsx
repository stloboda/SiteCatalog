import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const CardItem = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4200/users/${id}`)
      .then((response) => response.json())
      .then((users) => {
        setUser(users);
      });
  }, [id]);

  return <div>{user.name}</div>;
};

export default CardItem;
