import React, { useState, useEffect } from "react";
import CardList from "./CardList";
import "./CatalogCard.css";

const CatalogCard = () => {
  const [users, setUser] = useState([]);

  //   useEffect(() => {
  //     productData();
  //   }, []);

  //   const productData = async () => {
  //     const data = await fetch("https://jsonplaceholder.typicode.com/users");

  //     const product = await data.json();
  //     setProduct(product);
  //   };

  useEffect(() => {
    fetch("http://localhost:4200/users")
      .then((response) => response.json())
      .then((users) => {
        setUser(users);
      });
  }, []);

  return (
    <div className="catalog" id="catalog">
      <div className="catalog__desc">
        <h3 className="desc__main">
          Why we need to use this applycation
          <br />
          it allows to find what you need
        </h3>
        <p className="desc__second">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="catalog__list">
        {users.map((user) => (
          <CardList user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default CatalogCard;
