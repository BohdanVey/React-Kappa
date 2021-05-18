import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ExploreSubmit from "../../modules/Add/components/ExploreForm";
import Header from "../../modules/Global/Header";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
}));

const AddExploreView = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="xs">
      <Header />
      <ExploreSubmit />
    </Container>
  );
};

export default AddExploreView;
