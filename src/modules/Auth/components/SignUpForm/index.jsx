import React, {useState, useContext} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {authContext} from "../../../../context"
import useForm from "./useForm";
import {loggedInAction} from "../../actions/actionTypes";
import {useDispatch, useSelector} from "react-redux";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link,
    Redirect,
    useLocation,
    useHistory
} from "react-router-dom";

function validate(values) {
    let errors = {};
    if (!values.email) {
        errors.email = 'Email address is required';
    } else if (values.email.indexOf("@gmail.com") < 0) {
        errors.email = 'Email should contain @gmail.com';
    }
    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 8) {
        errors.password = 'Password must be 8 or more characters';
    }
    return errors;
};

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


export default function LogInForm() {
    const classes = useStyles();
    const fakeauth = useContext(authContext);
    const [
        redirectToReferrer,
        setRedirectToReferrer
    ] = useState(false)

    const {state} = useLocation()

    // console.log("hhhh: " + state);


    function onSubmit() {
        setRedirectToReferrer(true)
    };

    const dispatch = useDispatch();


    const [logInFail, setLogInFail] = useState(false);

    const userCred = useSelector((state) => state.userCred);
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(onSubmit, validate);

    if (redirectToReferrer === true) {
        console.log("redirect")
        return <Redirect to={state?.from || '/main'}/>
    }

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Typography component="h1" variant="h4">
                    Sign Up
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit} noValidate>
                    <TextField
                        onChange={handleChange} value={values.email || ''}
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoFocus
                    />
                    {errors.email && (
                        <p>{errors.email}</p>
                    )}
                    <TextField
                        onChange={handleChange} value={values.password || ''}
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                    />
                    {errors.password && (
                        <p>{errors.password}</p>
                    )}
                    <Button
                        type="submit"
                        margin="normal"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}

                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </Container>
    );
}