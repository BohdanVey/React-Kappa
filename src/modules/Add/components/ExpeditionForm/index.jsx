 import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
// import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import ContentExpedition from "../../../Content/Expedition";

// import {useHistory} from "react-router-dom";


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


export default function ExpeditionSubmit(props) {
    const addExpedition = props.addExpedition;
    const classes = useStyles();
    // const history = useHistory();
    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Typography component="h1" variant="h4">
                    Add Expedition
                </Typography>
                <form className={classes.form} onSubmit={(e) => {
                    addExpedition({
                        title: document.getElementById('expedition').value,
                        date: document.getElementById('date').value
                    })
                    e.preventDefault();
                }} noValidate>
                    <TextField
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        id="expedition"
                        label="Expedition Name:"
                        name="expedition"
                        autoFocus
                    />
                    <TextField
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        id="date"
                        label="Date:"
                        name="date"
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
