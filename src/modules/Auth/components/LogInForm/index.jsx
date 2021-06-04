import React, { useState, useContext, useEffect } from "react";
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

import { loggedInAction } from "../../actions/actionTypes";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from '@material-ui/lab';

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

  const [
    redirectToReferrer,
    setRedirectToReferrer
  ] = useState(false)

  const { state } = useLocation()

  const dispatch = useDispatch(); 
 
  const { handleSubmit, control } = useForm();

  const [logInFail, setLogInFail] = useState(false);

  const userCred = useSelector((state) => state.userCred);


  useEffect(() => {
    fetch('http://localhost:8000/creds')
      .then(res => {
        return res.json()
      })
      .then(data => {

        //тут свій код
        console.log(data)
      })
  }, []);

  const onSubmit = data => {
    for (let i=0; i < userCred.length; i++) {
      if (userCred[i].email === data.email && 
        userCred[i].password === data.password) {
          dispatch({type:loggedInAction, payload:userCred[i]});          
          setRedirectToReferrer(true)
          return;
        };
    };
    setLogInFail(true);
  };

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
        {logInFail        
          ? <Alert severity="error">Email or password is incorrect</Alert>
          : <p></p>
        }
        <Button
            type="submit"
            margin="normal"
            fullWidth
            variant="contained"
            color= "primary"            
          >
            Log In
          </Button>
      </form>
      </div>
    </Container>
  );
}

export default LogInForm;