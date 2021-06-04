// export function getUserInfo() {
//     const axios = require('axios');

//     axios.get('http://localhost:8000/creds')
//     .then(res => {
//       const data = res.data;
//       console.log(res.data);
//     })
//     .catch(error => {
//       console.log(error);
//     })
// }


// export function getJSON(url) {
//     const axios = require('axios');

//     axios.get(url)
//     .then(res => {
//     //   const data = res.data;
//       console.log(res.data);
//       return res.data;

//     })
//     .catch(error => {
//       console.log(error);
//     })
// }

// export function insertData(url, data) {
//     const axios = require('axios');

//     axios.put(url, data)
//     .then(resp => {
//         console.log(resp.data);

//         console.log(resp.data);
//         return resp.data;

//     }).catch(error => {

//         console.log(error);
//     }); 
// }