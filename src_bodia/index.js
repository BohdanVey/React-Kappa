import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Explore from './views/Explore'
import Main from './views/Main'
import Expedition from "./views/Expedition";
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Switch>
              <Route path='/main'>
                  <Main />
              </Route>
              <Route path='/explore'>
                  <Explore />
              </Route>
              <Route path='/expedition'>
                  <Expedition />
              </Route>
          </Switch>
      </Router>
      </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
