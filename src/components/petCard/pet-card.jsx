import React from "react";
import "./pet-card.scss";
export default function PetCard({ pet }) {
  return (
    <div className="pet-card">
      <div className="pet-card__picture">
        <img src={pet.image} alt="pet" className="pet-card__picture__img" />
      </div>
      <div className="pet-card__description">
        <p className="pet-card__description--name">{pet.name}</p>
        <p className="pet-card__description--city">
          <span className="material-icons">location_on</span>
          <span className="label">{pet.city}</span>
        </p>
        <p className="pet-card__description--description">{pet.description}</p>
      </div>
    </div>
  );
}
