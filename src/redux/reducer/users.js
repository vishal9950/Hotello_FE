import React from 'react';
import TableButton from '../../Components/TableButton';

const defaultState = {
  // authorization: '',
  userHeader: ['First Name', 'Last Name', 'Email', 'Role', 'PhoneNumber', 'Status', 'Edit', 'Delete', 'Suspend'],
  userData: [],
  userColumns: 'firstName.lastName.email.role.phoneNumber.suspended.edit.delete.suspend',
  currentUser: {},
  currentAdminUser: {},
};


const userReducer = (prevState = defaultState, action) => {
  switch (action.type) {
    case 'getUser': {
      const dataWithStrings = action.payload.users.usersRecords;
      for (let i = 0; i < dataWithStrings.length; i += 1) {
        if (action.payload.users.usersRecords[i].suspended === true) {
          dataWithStrings[i].suspended = <span className="RedSuspended"> Suspended</span>;
        } else {
          dataWithStrings[i].suspended = 'Active';
        }
        // dataWithStrings[i].suspended = action.payload.users.usersRecords[i].suspended.toString();
        dataWithStrings[i].edit = (
          <TableButton
            class="Edit"
            email={dataWithStrings[i].email}
            imgSrc="/editGreen.png"
            alt="Edit"
          />);
        dataWithStrings[i].delete = (
          <TableButton
            class="Delete"
            email={dataWithStrings[i].email}
            imgSrc="/redDelete.png"
            alt="Delete"
            disable={false}
          />);
        if (dataWithStrings[i].suspended === 'Active') {
          dataWithStrings[i].suspend = (
            <TableButton
              class="Suspend"
              email={dataWithStrings[i].email}
              imgSrc="/suspend.png"
              alt="Suspend"
              disable={false}
            />);
        } else {
          dataWithStrings[i].suspend = (
            <TableButton
              class="Unsuspend"
              email={dataWithStrings[i].email}
              imgSrc="/suspendGray.png"
              alt="Unsuspend"
              disable={false}
            />);
        }
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
          userData[i].suspended = <span className="RedSuspended"> Suspended</span>;
        }
      }
      return {
        ...prevState,
        userData,
      };
    }
    case 'userUnsuspend': {
      const userData = prevState.userData.slice();
      for (let i = 0; i < prevState.userData.length; i += 1) {
        if (userData[i].email === action.payload.email) {
          userData[i].suspended = 'Active';
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

    // Storing which is being currently edited
    case 'updateUser': {
      let currUser = {};
      prevState.userData.forEach((user) => {
        if (user.email === action.payload.email) {
          currUser = user;
        }
      });
      return {
        ...prevState,
        currentUser: currUser,
      };
    }
    // Editing the details of some user in the table
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

    // Storing the logged in admin users
    case 'updateAdminUser': {
      return {
        ...prevState,
        currentAdminUser: action.payload.user,
      };
    }

    // When the logged user account details is to be edited
    case 'copyAdminUser': {
      return {
        ...prevState,
        currentUser: prevState.currentAdminUser,
      };
    }
    default: {
      return prevState;
    }
  }
};
export default userReducer;
