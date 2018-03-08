// const jwt = require('jsonwebtoken');
import React from 'react';
import TableButton from '../../Components/TableButton';

const defaultState = {
  // authorization: '',
  userHeader: ['First Name', 'Last Name', 'Email', 'Role', 'PhoneNumber', 'Suspended', 'Edit', 'Delete', 'Suspend'],
  userData: [],
  userColumns: 'firstName.lastName.email.role.phoneNumber.suspended.edit.delete.suspend',
};

const userReducer = (prevState = defaultState, action) => {
  switch (action.type) {
    case 'getUser': {
      const dataWithStrings = action.payload.users.usersRecords;
      for (let i = 0; i < dataWithStrings.length; i += 1) {
        dataWithStrings[i].suspended = action.payload.users.usersRecords[i].suspended.toString();
        dataWithStrings[i].edit = (
          <button
            className="Edit"
            onClick={() => alert(`hi${i}`)}
          ><img className="EditIcon" src="/edit.png" alt="Edit" />
          </button>);
        dataWithStrings[i].delete = (
          <TableButton
            class="Delete"
            email={dataWithStrings[i].email}
            imgSrc="/delete.png"
            alt="Delete"
            disable={false}
          />);
        // <button
        //   // className={i % 2 === 0 ? 'Delete' : 'DeleteEven'}
        //   className="Delete"
        //   onClick={() => alert(`deleted${i}`)}
        // ><img className="DeleteIcon" src="/delete.png" alt="Delete" />
        // </button>);
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
    default: {
      return prevState;
    }
  }
};
export default userReducer;
