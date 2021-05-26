import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LogInView from "./views/LogInForm";
import SignInView from "./views/SignInForm";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import UserCardView from "./views/UserProfile";
import ExpedCardView from "./views/ExpedProfile";

import Explore from "./views/Explore/Explore";
import Main from "./views/Main/Main";
import Expedition from "./views/Expedition/Expedition";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

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

const userProfile = {
  logined: 1,
  fullName: "Nill Armstrong",
  userName: "nill_armstrong",

  email: "alex@gmail.com",
  phone: "+380991234567",
  about: "A modest simple guy on the mars",
  imgSource: "https://i.imgur.com/bxgzvrp.jpg",
  status: "Astronaut",
  expeditions: [
    {
      expeditionName: "First expedition",
      description: "This is the first expedition of Nill"
    },
    {
      expeditionName: "Second expedition",
      description: "This is the second expedition of Nill"
    },
  ]
}


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/expedition">
            <Expedition />
          </Route>

          <Route path="/logIn">
            <LogInView />
          </Route>
          <Route path="/signIn">
            <SignInView />
          </Route>
          <Route path="/user">
            <UserCardView userProfile={userProfile}/>
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