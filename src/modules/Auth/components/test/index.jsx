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


import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

// import { addTodoItem } from "../../actions/actionTypes";

const EditTodo = ({ open, handleClose }) => {
  const { control, handleSubmit, getValues, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = () => {
    // if (!errors) {
      const values = getValues();

      console.log(values);
    //   dispatch({ type: addTodoItem, payload: values });

    //   handleClose();
    // }
  };

  return (

      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle id="form-dialog-title">Add</DialogTitle>
        <DialogContent>
          <Typography component="h1" variant="h4">
          Log in
        </Typography>
          <FormGroup>
            <Controller
              name="email"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
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
              )}
              rules={{ required: "Email required" }}
            />
          </FormGroup>

          <FormGroup>
            <Controller
              name="password"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
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
              )}
              rules={{ required: "Password required" }}
            />
          </FormGroup>

        </DialogContent>
        <DialogActions>

          <Button
            type="submit"
            margin="normal"
            fullWidth
            variant="contained"
            color= "primary"  
          >
            Log In
          </Button>
          <Button type="submit" color="primary">
            Create
          </Button>
        </DialogActions>
      </form>
  );
};

EditTodo.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default EditTodo;