import { modifyUserData } from "../actions/actionTypes";


const initialState = {
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
        }
    ]
}


const modifyUserDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case modifyUserData:
      return {
        fullName: action.payload.fullName,
        userName: action.payload.userName,
        phone: action.payload.phone,
        status: action.payload.status,
        about: action.payload.about,
        status: action.payload.status,
      };

    default:
      return state;
  }
};

export default modifyUserDataReducer;
