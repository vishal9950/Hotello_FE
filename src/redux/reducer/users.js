// const jwt = require('jsonwebtoken');
import React from 'react';
import TableButton from '../../Components/TableButton';

const defaultState = {
  // authorization: '',
  userHeader: ['First Name', 'Last Name', 'Email', 'Role', 'PhoneNumber', 'Suspended', 'Edit', 'Delete', 'Suspend'],
  userData: [],
  userColumns: 'firstName.lastName.email.role.phoneNumber.suspended.edit.delete.suspend',
  currentUser: {},
};

const userReducer = (prevState = defaultState, action) => {
  switch (action.type) {
    case 'getUser': {
      const dataWithStrings = action.payload.users.usersRecords;
      console.log('The action object is: ', action.payload);
      for (let i = 0; i < dataWithStrings.length; i += 1) {
        dataWithStrings[i].suspended = action.payload.users.usersRecords[i].suspended.toString();
        dataWithStrings[i].edit = (
          <TableButton
            class="Edit"
            email={dataWithStrings[i].email}
            imgSrc="/edit.png"
            alt="Edit"
          />);
        dataWithStrings[i].delete = (
          <TableButton
            class="Delete"
            email={dataWithStrings[i].email}
            imgSrc="/delete.png"
            alt="Delete"
            disable={false}
          />);
        dataWithStrings[i].suspend = (
          <TableButton
            class="Suspend"
            email={dataWithStrings[i].email}
            imgSrc="/suspend2.png"
            alt="Suspend"
            disable={false}
          />);
      }
      return {
        ...prevState,
        userData: dataWithStrings,
      };
    }
    case 'userSuspend': {
      const userData = prevState.userData.slice();
      for (let i = 0; i < prevState.userData.length; i += 1) {
        if (userData[i].email === action.payload.email) {
          userData[i].suspended = 'true';
        }
      }
      return {
        ...prevState,
        userData,
      };
    }
    case 'userDelete': {
      const userData = prevState.userData.slice();
      const modifiedData = [];
      for (let i = 0; i < prevState.userData.length; i += 1) {
        if (userData[i].email !== action.payload.email) {
          modifiedData.push(userData[i]);
          // userData[i].suspended = 'true';
        }
      }
      return {
        ...prevState,
        userData: modifiedData,
      };
    }
    case 'updateUser': {
      let currUser = {};
      prevState.userData.forEach((user) => {
        if (user.email === action.payload.email) {
          currUser = user;
        }
      });
      console.log('Current user is: ', prevState.currentUser);
      return {
        ...prevState,
        currentUser: currUser,
      };
    }
    case 'modifyUser': {
      const tempUsers = prevState.userData.slice();
      tempUsers.forEach((user, i) => {
        if (user.email === action.payload.obj.email) {
          tempUsers[i].email = action.payload.obj.email;
          tempUsers[i].firstName = action.payload.obj.firstName;
          tempUsers[i].lastName = action.payload.obj.lastName;
          tempUsers[i].phoneNumber = action.payload.obj.phoneNumber;
        }
      });
      return {
        ...prevState,
        userData: tempUsers,
      };
    }
    default: {
      return prevState;
    }
  }
};
export default userReducer;
