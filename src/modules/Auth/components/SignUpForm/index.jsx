import React, { useState } from "react";
import {
  Redirect,
  useLocation,
} from "react-router-dom";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { useForm, Controller } from "react-hook-form";

import { addUserCredAction } from "../../actions/actionTypes";

import { useDispatch } from "react-redux";

import { addUserInfoAction } from "../../../Profiles/actions/actionTypes"

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


function SignUpForm() {
  const classes = useStyles();

  const [
    redirectToReferrer,
    setRedirectToReferrer
  ] = useState(false)
  
  const { state } = useLocation()

  const dispatch = useDispatch(); 
 
  const { handleSubmit, control } = useForm();

  const onSubmit = data => {
  
    dispatch({type:addUserCredAction, payload: data})
    dispatch({type:addUserInfoAction, payload: data})

    setRedirectToReferrer(true)

  };

  if (redirectToReferrer === true) {
    return <Redirect to={'/main'} />
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h4">
          Sign up
        </Typography>
        <form  className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="Email"
              variant="filled"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
              type="email"
              fullWidth
            />
          )}
          rules={{ required: 'Email required' }}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="Password"
              variant="filled"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
              type="password"
              fullWidth
            />
          )}
          rules={{ required: 'Password required' }}
        />
        <Button
            type="submit"
            margin="normal"
            fullWidth
            variant="contained"
            color= "primary"            
          >
            Sign up
          </Button>
      </form>
      </div>
    </Container>
  );
}

export default SignUpForm;