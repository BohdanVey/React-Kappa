import "./index.css";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { createMuiTheme, ThemeProvider, unstable_createMuiStrictModeTheme } from "@material-ui/core";

import { createStore } from "redux";
import { Provider } from "react-redux";

import LogInView from "./views/LogInForm";
import SignUpView from "./views/SignUpForm";
import UserCardView from "./views/UserProfile";
import ExpedCardView from "./views/ExpedProfile";
import Explore from "./views/Explore/Explore";
import Main from "./views/Main/Main";
import Expedition from "./views/Expedition/Expedition";


import rootReducer from "./rootReducer";
import { useSelector } from "react-redux";


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

      
const store = createStore(rootReducer);


        
const Routes = () => {

    function PrivateRoute({ children, ...rest }) {
        const logInInfo = useSelector((state) => state.currUser)

        return (
            <Route {...rest} render={({ location }) => {
                return logInInfo.loggedIn === true
                ? children
                : <Redirect to={{
                    pathname: '/login',
                    state: { from: location }
                }} />
            }} />
            )
        };
    
    return(
        <React.StrictMode>
          <Provider store={store}>
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
              <Route path="/signUp">
                  <SignUpView />
              </Route>
              <PrivateRoute path="/user/:id">
                  <UserCardView userProfile={userProfile}/>
              </PrivateRoute>
              <Route path="/exped">
                  <ExpedCardView />
              </Route>

              <Route path="/exped">
                  <ExpedCardView />
              </Route>
              </Switch>
          </Router>
          </ThemeProvider>
          </Provider>
        </React.StrictMode>
  );
}

export default Routes;
