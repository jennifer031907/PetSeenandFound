import React from "react";
import "./home.scss";
const petImage = "images/pet.svg";
export default function Home() {
  return (
    <div className="wrapper">
      <div>
        <img src={petImage} alt="pet"></img>
        <h4 className="title">My pets</h4>
        <p className="body-1">
          Taking care of a pet is my favorite, it helps me to gaimr stress and
          fatigue.
        </p>
      </div>

      <button className="btn btn-primary">Next</button>
    </div>
  );
}
