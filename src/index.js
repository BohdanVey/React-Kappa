import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LogInView from "./views/LogInForm";
import SignInView from "./views/SignInForm";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserCardView from "./views/UserProfile";
import ExpedCardView from "./views/ExpedProfile";


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/logIn">
            <LogInView />
          </Route>
          <Route path="/signIn">
            <SignInView />
          </Route>
          <Route path="/user">
            <UserCardView />
          </Route>
          <Route path="/exped">
            <ExpedCardView />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// reportWebVitals();
