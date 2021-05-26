import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import {useHistory} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(20),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },

  submit: {
    margin: theme.spacing(3, 0, 1),
  },
}));


export default function ExploreSubmit(props) {
  const addExplore = props.addExplore;
  const classes = useStyles();
  const history = useHistory();
  return (
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h4">
            Add Explore
          </Typography>
          <form className={classes.form} onSubmit={(e) => {
            addExplore({
              title: document.getElementById('explore').value,
            })
            e.preventDefault();
          }} noValidate>
            <TextField
                variant="filled"
                margin="normal"
                required
                fullWidth
                id="explore"
                label="Explore Name:"
                name="explore"
                autoFocus
            />
           <Button
                type="submit"
                margin="normal"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}

            >
              Submit
            </Button>
          </form>
        </div>
      </Container>
  );
}
