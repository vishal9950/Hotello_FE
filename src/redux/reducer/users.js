// const jwt = require('jsonwebtoken');

const defaultState = {
  authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTk2MTkyMDAsImVtYWlsIjoiYWRtaW5AaG90ZWxsby5jb20iLCJpYXQiOjE1MTk2MTU2MDB9.ihPYTBx_paO5zGIziDvXDd7zYEE0JmTB7GAyyLUDC-I',
  header: ['First Name', 'Last Name', 'Email', 'Role', 'PhoneNumber', 'Suspended'],
  data: [],

};

const counter = (prevState = defaultState, action) => {
  switch (action.type) {
    case 'getUser': {
      for (let i = 0; i < action.payload.users.usersRecords.length; i += 1) {
        action.payload.users.usersRecords[i].Suspeneded = action.payload.users.usersRecords[i].suspended.toString();
      }
      return {
        ...prevState,
        data: action.payload.users.usersRecords,
      };
    }
    default:
    { return prevState; }
  }
};


export default counter;
