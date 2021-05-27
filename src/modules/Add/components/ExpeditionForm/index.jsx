import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
// import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import ContentExpedition from "../../../Content/Expedition";

import {useHistory} from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addExpeditionAction } from "../../../Content/action/actionTypes";

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


export default function ExpeditionSubmit() {
    const classes = useStyles();

    const dispatch = useDispatch(); 
   
    const { handleSubmit, control } = useForm();
    
    const onSubmit = data => {
        console.log("ExpeditionSubmit fire");
        console.log(data);
        
        dispatch({type: addExpeditionAction, payload: data})
    };

    return (
        <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h4">
            Add expedition
          </Typography>
          <form  className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="title"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="Title"
                variant="filled"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
                type="title"
                fullWidth
              />
            )}
            rules={{ required: 'Title required' }}
          />
          <Controller
            name="date"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="Date"
                variant="filled"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
                type="date"
                fullWidth
              />
            )}
            rules={{ required: 'Date required' }}
          />
          
          <Button
              type="submit"
              margin="normal"
              fullWidth
              variant="contained"
              color= "primary"            
            >
              Add
            </Button>
        </form>
        </div>
      </Container>
    );
}
