import { Button, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PetCard from "../../components/petCard/pet-card";
import { db } from "../../firebaseconf";
import "./pets.scss";
export default function Pets() {
  const [pets, setPets] = useState([]);
  const history = useHistory();
  const useStyles = makeStyles((theme) => ({
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  const onRedirectAddPet = () => {
    history.push("/pets/add");
  };
  const classes = useStyles();
  useEffect(() => {
    db.collection("pets")
      .get()
      .then((petsQuery) => {
        const petsFormat = petsQuery.docs.map((petDoc) => petDoc.data());
        setPets(petsFormat);
      });
  }, []);

  return (
    <div>
      <Button
        type="button"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={onRedirectAddPet}
      >
        Add pet
      </Button>
      <div className="pets">
        {pets.map((pet) => (
          <PetCard pet={pet} key={pet.uid}></PetCard>
        ))}
      </div>
    </div>
  );
}
