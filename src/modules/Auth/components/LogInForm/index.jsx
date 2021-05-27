import React, { useState, useContext } from "react";
import {
  // BrowserRouter,
  Redirect,
  useLocation,
} from "react-router-dom";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { authContext } from "../../../../context"
// import { connect } from "react-redux";
import { loggedInAction, loggedOutAction } from "../../actions/actionTypes";
import { useDispatch } from "react-redux";


import PropTypes from "prop-types";

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


function LogInForm() {
  const classes = useStyles();
  const fakeauth = useContext(authContext);
  const [
    redirectToReferrer,
    setRedirectToReferrer
  ] = useState(false)
  const { state } = useLocation()
  const dispatch = useDispatch(); 
 
  const login = () => fakeauth.authenticate(() => {
    console.log("login fire")
    dispatch({type:loggedInAction})
    setRedirectToReferrer(true)
  })

  if (redirectToReferrer === true) {
    console.log("redirect")
    return <Redirect to={state?.from || '/main'} />
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h4">
          Log in
        </Typography>
        <form className={classes.form} onSubmit={(e) => {
          login()
          console.log("login button")
          e.preventDefault();
        }} noValidate>
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoFocus
          />
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
          />
          <Button
            type="submit"
            margin="normal"
            fullWidth
            variant="contained"
            color= "primary"
            className={classes.submit}
            
          >
            Log In
          </Button>
          <Link href="#" variant="body1" mx="auto">
            {"Don't have an account? Sign Up"}
          </Link>
        </form>
      </div>
    </Container>
  );
}

export default LogInForm;