import { loggedInAction, loggedOutAction } from "../actions/actionTypes";

const initialState = {
    loggedIn: false,
    currUserId: null,
  }


const currUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case loggedInAction:
      return {
        loggedIn: true,
        currUserId: "11111",
      };

    case loggedOutAction:
        console.log("case loggedOutAction")
      return {
        loggedIn: false,
        currUserId: null,
      };
    default:
      return state;
  }
};

export default currUserReducer ;