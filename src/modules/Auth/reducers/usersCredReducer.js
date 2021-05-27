import { addUserCredAction } from "../actions/actionTypes";

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

    case addUserCredAction:

        console.log({
            userId: state.length + 1,
            email: action.payload.email,
            password: action.payload.password,
        });
        
        return [
            ...state,
            {
                userId: state.length + 1,
                email: action.payload.email,
                password: action.payload.password,
            },
        ];

    default:
      return state;
  }
};

export default userCredReducer;