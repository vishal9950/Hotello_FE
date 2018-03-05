export const getUserData = users => ({
  type: 'getUser',
  payload: {
    users,
  },
});
export const getBookingData = bookings => ({
  type: 'getBookings',
  payload: {
    bookings,
  },
});
