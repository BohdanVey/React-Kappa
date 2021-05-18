import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import logo from "../../../media/photo.jpg";

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

export function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <a>
            <img src={logo} alt="Kitty Katty!" className={classes.logo} />
          </a>
          <Typography variant="h6" className={classes.title}></Typography>

          <Button color="inherit">Log in</Button>
          <Button color="inherit">Sign up</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
