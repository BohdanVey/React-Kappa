import { combineReducers } from "redux";

import currUserReducer from "./modules/Auth/reducers/currUserReducer";
// import currUserReducer from "./modules/Auth/reducers/currUserReducer";


const rootReducer = combineReducers({
    currUser: currUserReducer,
});

export default rootReducer;