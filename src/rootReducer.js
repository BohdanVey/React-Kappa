import { combineReducers } from "redux";

import currUserReducer from "./modules/Auth/reducers/currUserReducer";
import userCredReducer from "./modules/Auth/reducers/usersCredReducer";
// import currUserReducer from "./modules/Auth/reducers/currUserReducer";


const rootReducer = combineReducers({
    currUser: currUserReducer,
    userCred : userCredReducer, 
});

export default rootReducer;