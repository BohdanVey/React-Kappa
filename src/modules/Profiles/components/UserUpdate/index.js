import React from 'react';

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

import { useForm, Controller } from "react-hook-form";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { updateUserProfileAction } from "../../actions/actionTypes";

// eslint-disable-next-line no-unused-vars
const UserUpdate = ({ open, handleClose }) => {
  const { control, handleSubmit, getValues, errors } = useForm();

  const currUser = useSelector((state) => state.currUser)
  const props = useSelector((state) => state.userInfo[currUser.currUserId - 1])
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (!errors) {
      const values = getValues();
      values.id = props.userId;
      values.email = props.userProfile.email;
      values.expeditions = props.userProfile.expeditions;
      values.username = props.userProfile.username;
      values.imgSource = props.userProfile.imgSource;
      values.status = props.userProfile.status;


    //   console.log("121212");
      console.log("Props");
      console.log(props);

      dispatch({
          type: updateUserProfileAction,
          payload: values,
        });

      handleClose();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle id="form-dialog-title">Modify the Profile</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>Add/Update todo item</DialogContentText> */}
          <FormGroup>
            <Controller
              name="name"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="Full Name"
                  margin="dense"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{ required: "Full Name required" }}
            />
          </FormGroup>

          <FormGroup>
            <Controller
              name="phone"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="Phone number"
                  margin="dense"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{ required: "Phone number required" }}
            />
          </FormGroup>

          <FormGroup>
            <Controller
              name="about"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="About"
                  margin="dense"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{ required: "about required" }}
            />
          </FormGroup>
{/* 
          <FormGroup>
            <Controller
              name="type"
              control={control} */}
            {/* //   render={({ field: { onChange, value } }) => ( */}
                {/* // <Select
                //   native
                //   value={value}
                //   onChange={onChange}
                //   inputProps={{
                //     name: "type",
                //     id: "age-native-simple",
                //   }}
                // >
                  {/* <option aria-label="None" value="" /> */}
                  {/* <option value="personal">None: </option>
                //   <option value="work">Workd</option>
                //   <option value="study">Studdy</option>  */}
                  {/* <option value="Astronaut">Astronaut</option> */}
                  {/* <option value="Future Astronaut">Future Astronaut</option>
                  <option value="Other">Other</option> */}
                {/* </Select> */}
            {/* //   )}
            //   rules={{ required: "Type required" }}
            // />
        //   </FormGroup> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Create
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

UserUpdate.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
//   addTodoItemAction: PropTypes.func.isRequired,
};

export default UserUpdate;
