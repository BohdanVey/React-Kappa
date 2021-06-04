import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {useForm} from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

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

export default function SignIn() {
    const classes = useStyles();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Typography component="h1" variant="h4">
                    Sign up
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoFocus
                        {...register("email", {
                            validate: value => {
                                console.log("HELLO")
                                return false;
                            }
                        })}
                    />
                    <ErrorMessage errors={errors} name="EmailError" />

                    <ErrorMessage
                        errors={errors}
                        name="EmailError"
                        render={({ message }) => <p>{message}</p>}
                    />
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
                    <TextField
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        name="confrim password"
                        label="Confrim password"
                        type="confrim password"
                        id="confrim password"
                    />
                    <Button
                        type="submit"
                        margin="normal"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign up
                    </Button>
                    <Link href="#" variant="body1" mx="auto">
                        {"Have an account? Log In"}
                    </Link>
                </form>
            </div>
        </Container>
    );
}
