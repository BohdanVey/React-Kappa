import "./index.css";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";

import { createStore } from "redux";
import { Provider } from "react-redux";

import LogInView from "./views/LogInForm";
import SignUpView from "./views/SignUpForm";
import UserCardView from "./views/UserProfile";
import ExpedCardView from "./views/ExpedProfile";
import Explore from "./views/Explore/Explore";
import Main from "./views/Main/Main";
import Expedition from "./views/Expedition/Expedition";
import Content from "./views/TestTest/";


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
                      <UserCardView />
                  </PrivateRoute>
                  <Route path="/exped">
                      <ExpedCardView />
                  </Route>
                  <Route path="/exped">
                      <ExpedCardView />
                  </Route>
                  <Route path="/test">
                      <Content />
                  </Route>

                  </Switch>
              </Router>

            </ThemeProvider>
          </Provider>
        </React.StrictMode>
  );
}

export default Routes;
