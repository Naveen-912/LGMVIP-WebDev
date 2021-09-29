import React, { useState } from "react";
import "./Card.css";

import Progress from "@material-ui/core/CircularProgress";

function Card() {
  const [detail, displayDetail] = useState([]);
  const [detail_two, displayDetail_two] = useState([]);
  const [isLoading, Loading] = useState(false);

  const getApi = () => {
    Loading(true);

    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((json) => {
        displayDetail(json.data);
      });

    fetch("https://reqres.in/api/users?page=2")
      .then((response) => response.json())
      .then((json) => {
        displayDetail_two(json.data);
      });

    setTimeout(() => {
      Loading(false);
    }, 500);
  };

  return (
    <div className="Card">
      <header>
        <a href="#" class="logo">
          EMPLOYEE
        </a>

        <nav class="navbar">
          <a href="#">Home</a>
        </nav>
      </header>

      <h1>Employee Details</h1>

      {isLoading ? "" : <button onClick={getApi}>Get Details</button>}

      {isLoading ? (
        <div>
          {" "}
          <h1>
            <Progress color="inherit" />
            Loading ...
          </h1>
        </div>
      ) : (
        ""
      )}

      <div className="card-div">
        <div className="cards">
          {detail.map((item) => {
            return (
              <div className="user-profile">
                <div className="image">
                  <img src={item.avatar} alt=""></img>
                </div>

                <p>
                  <b>ID : </b>
                  {item.id}{" "}
                </p>
                <p>
                  <b>First Name : </b>
                  {item.first_name}{" "}
                </p>
                <p>
                  <b>Last Name : </b>
                  {item.last_name}{" "}
                </p>
                <p>
                  <b>Email : </b>
                  {item.email}{" "}
                </p>
              </div>
            );
          })}

          {detail_two.map((item) => {
            return (
              <div className="user-profile">
                <div className="image">
                  <img src={item.avatar} alt="User-Image"></img>
                </div>

                <p>
                  <b>ID : </b>
                  {item.id}{" "}
                </p>
                <p>
                  <b>First Name : </b>
                  {item.first_name}{" "}
                </p>
                <p>
                  <b>Last Name : </b>
                  {item.last_name}{" "}
                </p>
                <p>
                  <b>Email : </b>
                  {item.email}{" "}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
