import { combineReducers } from "redux";

import currUserReducer from "./modules/Auth/reducers/currUserReducer";
import userCredReducer from "./modules/Auth/reducers/usersCredReducer";
import expeditionsReducer from "./modules/Content/reducers/expeditionsReducer";
import discoveriesReducer from "./modules/Content/reducers/discoveriesReducer";
import userInfoReducer from "./modules/Profiles/reducers/userInfoReducer"

const rootReducer = combineReducers({
    currUser: currUserReducer,
    userCred : userCredReducer,
    expeditions : expeditionsReducer,
    discoveries : discoveriesReducer,
    userInfo : userInfoReducer,
});

export default rootReducer;