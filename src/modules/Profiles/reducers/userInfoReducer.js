import { LocalConvenienceStoreOutlined } from "@material-ui/icons";
import {
  addUserInfoAction,
  updateUserProfileAction,
  getUserProfileActionThunk,
  updateUserProfileActionThunk,
 } from "../actions/actionTypes";


 // replace with json database now
const initialState = [
    {
        userId: 1,
        userProfile : {
            fullName: "Nill Armstrong",
            userName: "nill_armstrong",
          
            email: "1@1.1",
            phone: "+380991234567",
            about: "A modest simple guy on the mars",
            imgSource: "https://i.imgur.com/bxgzvrp.jpg",
            status: "Astronaut",
            expeditions: [
              {
                expeditionName: "First expedition",
                description: "This is the first expedition of Nill"
              },
              {
                expeditionName: "Second expedition",
                description: "This is the second expedition of Nill"
              },
            ]
        },
    },
    {
        userId: 2,
        userProfile : {
            fullName: "222",
            userName: "222",
          
            email: "2@2.com",
            phone: "+380991234567",
            about: "A modest simple guy on the mars",
            imgSource: "https://i.imgur.com/bxgzvrp.jpg",
            status: "Astronaut",
            expeditions: [
              {
                expeditionName: "First expedition",
                description: "This is the first expedition of N22ill"
              },
              {
                expeditionName: "Second expedition",
                description: "This is the second expedition of 22"
              },
            ]
        },
    },
    {
        userId: 3,
        userProfile : {
            fullName: "333",
            userName: "333",
          
            email: "3@3.com",
            phone: "+380991234567",
            about: "A modest simple guy on the mars",
            imgSource: "https://i.imgur.com/bxgzvrp.jpg",
            status: "Astronaut",
            expeditions: [
              {
                expeditionName: "First expedition",
                description: "This is the first expedition of 333"
              },
              {
                expeditionName: "Second expedition",
                description: "This is the second expedition of 333"
              },
            ]
        },
    },
];


const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {

    case updateUserProfileActionThunk:
      console.log("user update reducer");
      return {... state, notes: [... state.notes, action.payload]}

    case getUserProfileActionThunk:
      console.log("got to REDUCER getUserProfileActionThunk");
      return {
        ... state,
        loading: true
      }

    case addUserInfoAction:
        return [
            ...state,
            {
                userId: state.length + 1,
                userProfile : {
                    fullName: "empty",
                    userName: "empty",
                  
                    email: action.payload.email,
                    phone: "empty",
                    about: "empty",
                    imgSource: "empty",
                    status: "empty",
                    expeditions: [
                    ]
                },
            },
        ];
    
    case updateUserProfileAction:

      console.log("action.payload")
      console.log(action.payload)
      for (let i = 0; i < state.length; i++) {
        if (state[i].userId === action.payload.id){
          state[i] = {
            userId: action.payload.id,
            userProfile : {
                fullName: action.payload.name,
                userName: action.payload.userName,
                email: action.payload.email,
                phone: action.payload.phone,
                about: action.payload.about,
                imgSource: action.payload.imgSource,
                status: action.payload.status,
                expeditions: action.payload.expeditions
            },
        };
      };
    }

    default:
      return state;
  }
};

export default userInfoReducer;