// const jwt = require('jsonwebtoken');
import React from 'react';
import TableButton from '../../Components/TableButton';

const defaultState = {
  bookingHeader: ['User Email', 'Booking Id', 'Booking Date', 'Hotel Name', 'City', 'Check-in Date', 'Check-out Date', 'Amount', 'Number of rooms', 'Number of guests', 'Status', 'Cancel'],
  bookingData: [],
  bookingColumns: 'email.bookingid.bookingdate.hotelname.city.checkin.checkout.amount.numofrooms.numofguests.status.cancel',
};

const bookingReducer = (prevState = defaultState, action) => {
  switch (action.type) {
    case 'getBookings': {
      const dataWithStrings = action.payload.bookings;
      console.log('THE BOOKING DATA IS: ', action.payload.bookings);
      for (let i = 0; i < dataWithStrings.length; i += 1) {
        let cancelled = false;
        // console.log(dataWithStrings[i].status);
        if (dataWithStrings[i].status === 'cancelled') cancelled = true;
        dataWithStrings[i].cancel = (
          <TableButton
            // className={!cancelled ? 'Cancel' : 'CancelDisable'}
            class="Cancel"
            disable={cancelled}
            email={dataWithStrings[i].bookingid}
            imgSrc="/cancel.png"
            alt="Cancel"
          />);
        // onClick={() => alert(`hi${i}`)}
        // ><img className="CancelIcon" src="/cancel.png" alt="Cancel" />
        // </TableButton>);
      }
      return {
        ...prevState,
        bookingData: dataWithStrings,
      };
    }
    case 'bookingCancel': {
      const bookingData = prevState.bookingData.slice();
      const modifiedData = [];
      for (let i = 0; i < prevState.bookingData.length; i += 1) {
        if (bookingData[i].bookingId !== action.payload.bookingId) {
          modifiedData.push(bookingData[i]);
          // userData[i].suspended = 'true';
        }
      }
      return {
        ...prevState,
        bookingData: modifiedData,
      };
    }
    default: {
      return prevState;
    }
  }
};
export default bookingReducer;
