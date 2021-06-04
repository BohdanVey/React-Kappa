import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SignUpForm from "../../modules/Auth/components/SignUpForm";
import Header from "../../modules/Global/Header";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(1),
  },
}));

const SignUpView = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="xs">
      <Header />
      <SignUpForm />
    </Container>
  );
};

export default SignUpView;
