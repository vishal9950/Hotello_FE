// const jwt = require('jsonwebtoken');
const defaultState = {
  authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTk2MzQyNDYsImVtYWlsIjoiYWRtaW5AaG90ZWxsby5jb20iLCJpYXQiOjE1MTk2MzA2NDZ9.l1g1BW1ZVw6So59KT0KU8UIMAoX1_IM0nEv7Cq3J58o',
  header: ['First Name', 'Last Name', 'Email', 'Role', 'PhoneNumber', 'Suspended'],
  data: [],

};

const counter = (prevState = defaultState, action) => {
  switch (action.type) {
    case 'getUser': {
      const dataWithStrings = action.payload.users.usersRecords;
      for (let i = 0; i < dataWithStrings.length; i += 1) {
        dataWithStrings[i].suspended = action.payload.users.usersRecords[i].suspended.toString();
      }
      return {
        ...prevState,
        data: dataWithStrings,
      };
    }
    default: {
      return prevState;
    }
  }
};
export default counter;
