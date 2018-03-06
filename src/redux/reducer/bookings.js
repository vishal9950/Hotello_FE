// const jwt = require('jsonwebtoken');
import React from 'react';

const defaultState = {
  bookingHeader: ['User Email', 'Booking Id', 'Booking Date', 'Hotel Name', 'City', 'Check-in Date', 'Check-out Date', 'Amount', 'Number of rooms', 'Number of guests', 'Cancel'],
  bookingData: [],
  bookingColumns: 'email.bookingid.bookingdate.hotelname.city.checkin.checkout.amount.numofrooms.numofguests.cancel',
};

const bookingReducer = (prevState = defaultState, action) => {
  switch (action.type) {
    case 'getBookings': {
      const dataWithStrings = action.payload.bookings;
      for (let i = 0; i < dataWithStrings.length; i += 1) {
        dataWithStrings[i].cancel = (
          <button
            className={i % 2 === 0 ? 'Cancel' : 'CancelEven'}
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
