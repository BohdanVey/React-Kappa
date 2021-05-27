import { loggedInAction, loggedOutAction } from "../actions/actionTypes";

const initialState = [
    {
        userId: 1,
        email: "1@1.com",
        password: "111",
    },
    {
        userId: 2,
        email: "2@2.com",
        password: "222",
    },
    {
        userId: 3,
        email: "3@3.com",
        password: "333",
    },
];


const userCredReducer = (state = initialState, action) => {
  switch (action.type) {
    case checkUserCredAction:
        for (i=0; i < state.length; i++) {
            if (action.payload.email === state[i].email) {
                return state[i].usedId;
            }
        } 
        return false;

    default:
      return state;
  }
};

export default userCredReducer;