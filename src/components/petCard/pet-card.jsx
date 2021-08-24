import React from "react";
import { db } from "../../firebaseconf";
import "./pet-card.scss";
export default function PetCard({ pet,removePet }) {
  const deletePet = async () => {
    await db.collection("pets").doc(pet.uid).delete();
    removePet(pet.uid)
  };
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
        <p className="pet-card__description--description">{pet.contact}</p>
        <p className="pet-card__description--description">
          <span> {pet.description}</span>
          <span className="material-icons remove" onClick={deletePet}>
            delete
          </span>
        </p>
      </div>
    </div>
  );
}
