import { Avatar, CircularProgress, Grid, makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { db, storage } from "../../firebaseconf";
export default function AddPet() {
  const history = useHistory();
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [contact, setContact] = useState("");
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const onAddPet = async () => {
    if (name && city && description && image && contact) {
      setLoading(true);
      try {
        const uid = new Date().getTime().toString();
        const storageRef = storage.ref(uid + image.name);
        const { ref } = await storageRef.put(image);
        const url = await ref.getDownloadURL();
        await db
          .collection("pets")
          .doc(uid)
          .set({ uid, name, description, city, image: url, contact });
        setLoading(false);

        history.push("/pets");
      } catch (err) {
        console.warn("Error add pet", err);
        setLoading(false);
      }
    }
  };
  const onBack = () => {
    history.push("/pets");
  };
  const onSetImage = ({ target }) => {
    if (target.files.length) {
      const file = target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageUrl(e?.target.result);
      };
      reader.readAsDataURL(file);

      setImage(file);
    }
  };
  const classes = useStyles();
  return !loading ? (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <img alt="pets" src={"/images/pets.jpg"} />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Add Pet
        </Typography>
        <form className={classes.form} noValidate>
          <Button
            variant="contained"
            component="label"
            fullWidth
            color="secondary"
          >
            Upload Photo
            <input type="file" hidden onChange={onSetImage} />
          </Button>
          {!!imageUrl ? (
            <Grid item xs={4} style={{ margin: "0 auto" }}>
              <Avatar
                src={imageUrl}
                className={classes.avatar}
                style={{ margin: "0 auto" }}
              ></Avatar>
            </Grid>
          ) : (
            ""
          )}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            type="text"
            label="Animal name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="city"
            label="City"
            type="text"
            id="city"
            autoComplete="city"
            onChange={(e) => setCity(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="contact"
            label="Contact phone number"
            type="tel"
            id="contact"
            placeholder="Contact phone number"
            autoComplete="contact"
            onChange={(e) => setContact(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="description"
            label="Description"
            placeholder="Age, Weight, color, breed,missing, Gender(F M)"
            type="text"
            id="description"
            autoComplete="description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
                onClick={onBack}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={onAddPet}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  ) : (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <CircularProgress />
    </Grid>
  );
}
