import React, {useState, useContext} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {authContext} from "../../../../context"
import useForm from "./useForm";


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


    function login() {
        fakeauth.authenticate(() => {
            console.log("login fire")
            setRedirectToReferrer(true)
        });
    }


    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(login, validate);

    if (redirectToReferrer === true) {
        console.log("redirect")
        return <Redirect to={state?.from || '/'}/>
    }

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Typography component="h1" variant="h4">
                    Log in
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