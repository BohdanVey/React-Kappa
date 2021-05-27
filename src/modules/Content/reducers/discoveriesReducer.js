import { addDiscoveryAction } from "../action/actionTypes";

const initialState = [
    {
        id: 1,
        title: '1',
    },
    {
        id: 2,
        title: '2',
    },
    {
        id: 3,
        title: '3',
    },
];



const discoveriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case addDiscoveryAction:
      return [
          ...state,
        {  
            id: state.length + 1,
            title: action.payload.title,
        }  
    ];
    default:
      return state;
  }
};

export default discoveriesReducer ;