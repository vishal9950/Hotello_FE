// const jwt = require('jsonwebtoken');
import React from 'react';

const defaultState = {
  bookingHeader: ['User Email', 'Booking Id', 'Booking Date', 'Hotel Name', 'City', 'Check-in Date', 'Check-out Date', 'Amount', 'Number of rooms', 'Number of guests', 'Status', 'Cancel'],
  bookingData: [],
  bookingColumns: 'email.bookingid.bookingdate.hotelname.city.checkin.checkout.amount.numofrooms.numofguests.status.cancel',
};

const bookingReducer = (prevState = defaultState, action) => {
  switch (action.type) {
    case 'getBookings': {
      const dataWithStrings = action.payload.bookings;
      for (let i = 0; i < dataWithStrings.length; i += 1) {
        let cancelled = false;
        // console.log(dataWithStrings[i].status);
        if (dataWithStrings[i].status === 'cancelled') cancelled = true;
        dataWithStrings[i].cancel = (
          <button
            // className={!cancelled ? 'Cancel' : 'CancelDisable'}
            className="Cancel"
            disabled={cancelled}
            onClick={() => alert(`hi${i}`)}
          ><img className="CancelIcon" src="/cancel.png" alt="Cancel" />
          </button>);
      }
      return {
        ...prevState,
        bookingData: dataWithStrings,
      };
    }
    default: {
      return prevState;
    }
  }
};
export default bookingReducer;
