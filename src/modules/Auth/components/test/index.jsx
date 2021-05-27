import { useState } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Select from "@material-ui/core/Select";
import FormGroup from "@material-ui/core/FormGroup";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core';

import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";


import {
    // BrowserRouter,
    Redirect,
    useLocation,
  } from "react-router-dom";

// import { addTodoItem } from "../../actions/actionTypes";

const EditTodo = ({ open, handleClose }) => {
    // const classes = useStyles();
    const { handleSubmit, control } = useForm();
    const [
        redirectToReferrer,
        setRedirectToReferrer
    ] = useState(false)


    const { state } = useLocation()


    const onSubmit = data => {
      console.log(data);
    //   dispatch({type:loggedInAction})
      setRedirectToReferrer(true)

    };
  


    if (redirectToReferrer === true) {
        console.log("redirect")
        return <Redirect to={'/main'} />
        // return <Redirect to={state?.from || '/main'} />
    }


    return (
      <form  onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="First Name"
              variant="filled"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
              fullWidth

            />
          )}
          rules={{ required: 'First name required' }}
        />
        <Controller
          name="lastName"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="Last Name"
              variant="filled"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
              fullWidth

            />
          )}
          rules={{ required: 'Last name required' }}
        />
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
            Log In
          </Button>
      </form>
    );
};

EditTodo.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default EditTodo;