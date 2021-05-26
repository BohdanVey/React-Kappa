import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Header from "../../modules/Global/Header";
import ExpedCard from "../../modules/Profiles/components/ExpedCard";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
}));

const ExpedCardView = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="xs">
      <Header />
      <ExpedCard />
    </Container>
  );
};

export default ExpedCardView;
