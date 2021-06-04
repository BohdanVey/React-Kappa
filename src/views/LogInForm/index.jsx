import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import LogInForm from "../../modules/Auth/components/LogInForm";
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from "../../modules/Global/Header";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
}));

const LogInView = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="xs">
      
      <CssBaseline />
      <Header />

      <div style={{marginTop: 80}}>
        <LogInForm />

      </div>
    </Container>
  );
};

export default LogInView;
