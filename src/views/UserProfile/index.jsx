import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Header from "../../modules/Global/Header";
import UserCard from "../../modules/Profiles/components/UserCard";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
}));

const UserCardView = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="xs">
      <Header />
      <UserCard />
    </Container>
  );
};

export default UserCardView;
