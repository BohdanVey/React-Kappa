import { addExpeditionAction } from "../action/actionTypes";

const initialState = [
    {
        id: 1,
        title: '1',
        date: '10.12.2017'
    },
    {
        id: 2,
        title: '2',
        date: '11.12.2018'
    },
    {
        id: 3,
        title: '3',
        date: '12.12.2019'
    },
];



const expeditionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case addExpeditionAction:
        console.log(state);
      return [
          ...state,
        {  
            id: state.length + 1,
            title: action.payload.title,
            date: action.payload.date,
        }  
    ];
    default:
      return state;
  }
};

export default expeditionsReducer ;