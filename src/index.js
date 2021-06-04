import React from "react";
import { render } from "react-dom";
import Routes from "./router"

// this is used in router
// const store = compose(
//   applyMiddleware(thunk)
// )(createStore)(rootReducer);

render(
  <div>
    <Routes />
  </div>
  ,document.getElementById("root")
);

// reportWebVitals();