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
export const userSuspend = email => ({
  type: 'userSuspend',
  payload: {
    email,
  },
});
export const userDelete = email => ({
  type: 'userDelete',
  payload: {
    email,
  },
});
export const updateUser = email => ({
  type: 'updateUser',
  payload: {
    email,
  },
});

export const modifyUser = obj => ({
  type: 'modifyUser',
  payload: {
    obj,
  },
});
