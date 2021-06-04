import React from "react";
import logo from "../../../media/photo.jpg";
import {
  Redirect,
  Link,
} from "react-router-dom";


import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


import PropTypes from "prop-types";
// import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { loggedOutAction } from "../../Auth/actions/actionTypes";

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

    authLink: {
      marginRight: "20px",
    },
  })
);

export function Header() {
  const classes = useStyles();

  const logInInfo = useSelector((state) => state.currUser)

  const dispatch = useDispatch();

  let condPart1;
  let condPart2;

  if (logInInfo.loggedIn === false) {      
    condPart1 =  <Link to="/login" className={classes.authLink}><Typography color="secondary" >Log in</Typography></Link>;
    condPart2 = <Link to="/signup" className={classes.authLink}><Typography color="secondary" >Sign Up</Typography></Link>;
  
  } else {
    condPart1 = <Link to={"/user/:" + logInInfo.currUserId} className={classes.authLink}><Typography color="secondary" >Profile</Typography></Link>;
    condPart2 = <Button color="secondary" onClick={() => { dispatch({type:loggedOutAction}) }}>Log Out</Button>;
  }


  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <Link to="/main">
            <img src={logo} alt="Kitty Katty!" className={classes.logo} />
          </Link>
          <Typography variant="h6" className={classes.title}></Typography>
          {condPart1}
          {condPart2}

        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

// const mapStateToProps = (state) => ({
//   loggedIn: state.currUser.loggedIn,
// });

// export default connect(mapStateToProps)(Header);
export default Header;

