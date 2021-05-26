import React, { useState } from "react";
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
  Link,
  Redirect,
  useLocation,
  useHistory
} from "react-router-dom";
import { authContext } from "./context"

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

// function Login(fakeAuth) {
//     const [
//       redirectToReferrer,
//       setRedirectToReferrer
//     ] = useState(false)
  
//     const { state } = useLocation()
  
//     const login = () => fakeAuth.authenticate(() => {
//       setRedirectToReferrer(true)
//     })

//     if (redirectToReferrer === true) {
//       return <Redirect to={state?.from || '/'} />
//     }

//     return (
//       <div>
//         <p>You must log in to view the page</p>
//         <button onClick={login}>Log in</button>
//       </div>
//     )
//   }



        
        
const Routes = () => {
    const [isAuthenticated, setAuth] = useState(false)

    function PrivateRoute({ children, ...rest }) {
        return (
            <Route {...rest} render={({ location }) => {
                return isAuthenticated === true
                ? children
                : <Redirect to={{
                    pathname: '/login',
                    state: { from: location }
                }} />
            }} />
            )
        }

    const fakeAuth = {
        authenticate(cb) {
          // implement identity check  
          console.log('auth try')
          setAuth(true)
          setTimeout(cb, 100) // fake async
          console.log('is auth?  ' + isAuthenticated)
        },
    
        signout(cb) {
          setAuth(false)
        }
    }

    // const auth(cb) {

    //     setAuth(true)
    // }
    
    return(
        <React.StrictMode>
            <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                <PrivateRoute path="/main">
                    <Main />
                </PrivateRoute>
                <Route path="/explore">
                    <Explore />
                </Route>
                <Route path="/expedition">
                    <Expedition />
                </Route>
                <Route path="/logIn">
                    <authContext.Provider value={fakeAuth}>
                        <LogInView />
                    </authContext.Provider>
                </Route>
                <Route path="/signIn">
                    <SignInView />
                </Route>
                <PrivateRoute path="/user">
                    <UserCardView userProfile={userProfile}/>
                </PrivateRoute>
                <Route path="/exped">
                    <ExpedCardView />
                </Route>
                </Switch>
            </Router>
            </ThemeProvider>
        </React.StrictMode>
  );
}

export default Routes;
// reportWebVitals();
