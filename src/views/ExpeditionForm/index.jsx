import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ExpeditionSubmit from "../../modules/Add/components/ExpeditionForm";
import Header from "../../modules/Global/Header";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
}));

const AddExpeditionView = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="xs">
      <Header />
      <ExpeditionSubmit />
    </Container>
  );
};

export default AddExpeditionView;
