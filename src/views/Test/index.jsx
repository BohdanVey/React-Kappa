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
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

// import { addTodoItem } from "../../actions/actionTypes";

const EditTodo = ({ open, handleClose }) => {
  const { control, handleSubmit, getValues, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (!errors) {
      const values = getValues();
    //   dispatch({ type: addTodoItem, payload: values });

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
        <DialogTitle id="form-dialog-title">Add</DialogTitle>
        <DialogContent>
          <DialogContentText>Add/Update todo item</DialogContentText>
          <FormGroup>
            <Controller
              name="title"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="Title"
                  margin="dense"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{ required: "Title required" }}
            />
          </FormGroup>

          <FormGroup>
            <Controller
              name="desc"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="Description"
                  margin="dense"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{ required: "Description required" }}
            />
          </FormGroup>

          <FormGroup>
            <Controller
              name="type"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select
                  native
                  value={value}
                  onChange={onChange}
                  inputProps={{
                    name: "type",
                    id: "age-native-simple",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value="personal">Personal</option>
                  <option value="work">Work</option>
                  <option value="study">Study</option>
                </Select>
              )}
              rules={{ required: "Type required" }}
            />
          </FormGroup>
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

EditTodo.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default EditTodo;