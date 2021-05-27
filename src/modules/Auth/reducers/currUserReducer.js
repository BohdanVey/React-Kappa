import { loggedInAction, loggedOutAction } from "../actions/actionTypes";

const initialState = {
    loggedIn: false,
    currUserId: null,
  }


const currUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case loggedInAction:

    console.log("currUserReducer loggedInAction fire")
    console.log(action.payload)
    console.log("currUserReducer loggedInAction fire")

      return {
        loggedIn: true,
        currUserId: action.payload.userId,
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