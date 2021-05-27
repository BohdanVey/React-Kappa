import React from "react";
import logo from "../../../media/photo.jpg";
import {
  Link,
} from "react-router-dom";


import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign: "center",
    },
    logo: {
      maxWidth: 40,
      marginRight: "10px",
    },
  })
);

export function Header({ loggedIn }) {
  const classes = useStyles();

  const logInInfo = useSelector((state) => state.currUser)

  const logged = loggedIn;
  console.log(logInInfo);
  console.log(logInInfo);
  console.log(logInInfo);
  console.log(logInInfo);
  console.log(logInInfo);
  console.log(logInInfo);
  console.log(logInInfo);
  console.log(logInInfo);
  // console.log(loggedIn);
  // console.log(loggedIn);
  // console.log(loggedIn);

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <Link to="/main">
            <img src={logo} alt="Kitty Katty!" className={classes.logo} />
          </Link>
          <Typography variant="h6" className={classes.title}></Typography>

          <Button color="inherit">Log in</Button>
          <Button color="inherit">Sign up</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  loggedIn: state.currUser.loggedIn,
});

export default connect(mapStateToProps)(Header);

