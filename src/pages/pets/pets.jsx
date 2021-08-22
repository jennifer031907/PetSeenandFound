import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import PetCard from "../../components/petCard/pet-card";

export default function Pets() {
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
      <PetCard></PetCard>
    </div>
  );
}
