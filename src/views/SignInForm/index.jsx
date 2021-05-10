import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SignInForm from "../../modules/Auth/components/SignInForm";
import Header from "../../modules/Global/Header"

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(1),
  },
}));

const SignInView = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="xs">
      <Header />
      <SignInForm />
    </Container>
    
  );
};

export default SignInView;