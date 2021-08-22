import React from "react";
import { Link } from "react-router-dom";
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

      <Link className="btn btn-primary" to="/pets">
        Next
      </Link>
    </div>
  );
}
