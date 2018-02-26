// const jwt = require('jsonwebtoken');
const defaultState = {
  authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTk2Mjg2NDUsImVtYWlsIjoiYWRtaW5AaG90ZWxsby5jb20iLCJpYXQiOjE1MTk2MjUwNDV9.PPhnPw-PObg6pkmScpWXDv5C28aTwXLdEi0Kwaf-ZfQ',
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
