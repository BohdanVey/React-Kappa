import {
    addUserInfoActionThunk,

    getUserProfileActionThunk,
    getUserProfileActionThunkFail,
    getUserProfileActionThunkSuccess,
    updateUserProfileAction,
    updateUserProfileActionThunk,
    updateUserProfileActionThunkFail,
    updateUserProfileActionThunkSuccess
} from "./actionTypes";

const axios = require('axios');

// axios.put('http://localhost:3000/users/6/', {
//     first_name: 'Fred',
//     last_name: 'Blair',
//     email: 'freddyb34@yahoo.com'
// }).then(resp => {

//     console.log(resp.data);
// }).catch(error => {

//     console.log(error);
// });  


export const updateItems = () => async (dispatch, getState) => {
    const cur_state = getState();

    dispatch({ type: updateUserProfileActionThunk });

    const url = 'http://localhost:8002/creds';
    
    const axios = require('axios');

    await axios.put(url, cur_state
    ).then(resp => {
        console.log(resp.data);
        alert("success;");
    }).catch(error => {
    
        console.log(error);
    });  


    // fetch(url,
    //     {
    //         method: "PUT",
    //     })
    //   .then(res => {
    //     return res.json()
    //   })
    //   .then(data => {

    //     //тут свій код
    //     console.log("data from backend: ", data)
    //     return dispatch({ type: getUserProfileActionThunkSuccess, payload: data});
    //   })
    //   .catch((err) => dispatch({ type: getUserProfileActionThunkFail, payload: err}));
};



export const fetchItems = () => (dispatch) => {
    // dispatchEvent({ type: getUserProfileActionThunk });

    const url = 'http://localhost:8002/creds';
    
    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(data => {

        console.log("data from backend: ", data)
        // return dispatch({ type: getUserProfileActionThunkSuccess, payload: data});
      })
    //   .catch((err) => dispatch({ type: getUserProfileActionThunkFail, payload: err}));
};