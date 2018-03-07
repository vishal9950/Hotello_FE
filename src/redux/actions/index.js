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
export const userSuspended = email => ({
  type: 'userSuspended',
  payload: {
    email,
  },
});
