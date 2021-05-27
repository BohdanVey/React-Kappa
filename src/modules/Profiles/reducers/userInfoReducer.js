import { addUserInfoAction } from "../actions/actionTypes";

const initialState = [
    {
        userId: 1,
        userProfile : {
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


    default:
      return state;
  }
};

export default userInfoReducer;