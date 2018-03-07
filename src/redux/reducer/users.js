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
          <button
            // className={i % 2 === 0 ? 'Delete' : 'DeleteEven'}
            className="Delete"
            onClick={() => alert(`deleted${i}`)}
          ><img className="DeleteIcon" src="/delete.png" alt="Delete" />
          </button>);
        dataWithStrings[i].suspend = (
          <TableButton
            // className={i % 2 === 0 ? 'Suspend' : 'SuspendEven'}
            class="Suspend"
            email={dataWithStrings[i].email}
            imgClass={dataWithStrings[i].suspended === 'false' ? 'SuspendIcon' : 'SuspendDisabled'}
            imgSrc="/suspend2.png"
            alt="Suspend"
          >
            {/* onClick={() => alert(action.payload.fn)}
           ><img className="SuspendIcon" src="/suspend2.png" alt="Suspend" /> */}
          </TableButton>);
      }
      return {
        ...prevState,
        userData: dataWithStrings,
      };
    }
    case 'userSuspended': {
      return {
        ...prevState,
        // userdata=
      };
    }
    default: {
      return prevState;
    }
  }
};
export default userReducer;
