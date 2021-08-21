import React from "react";
import "./pet-card.scss";
export default function PetCard() {
  return (
    <div className="pet-card">
      <div className="pet-card__picture">
        <img
          src="https://picsum.photos/200/200"
          alt="pet"
          className="pet-card__picture__img"
        />
      </div>
      <div className="pet-card__description">
        <p className="pet-card__description--name">Greyhound</p>
        <p className="pet-card__description--city">
          <span className="material-icons">location_on</span>
          <span className="label">New York City</span>
        </p>
        <p className="pet-card__description--description">
          Taking care of a pet is my favorite, it helps me to...
        </p>
      </div>
    </div>
  );
}
