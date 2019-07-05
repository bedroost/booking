/* eslint-disable arrow-body-style */
const db = require('../db');
const seed = require('../db/seed.js');

module.exports.seedDb = () => {
  seed.generateData();
};

module.exports.getListingInfo = (bookingId) => {
  return db.Booking.findByPk(bookingId);
};

module.exports.getBookedDates = (bookingId) => {
  return db.BookingDate.findAll({
    where: { bookingId },
  });
};

module.exports.createBookedDates = (bookingId, checkinDate, checkoutDate) => {
  return db.BookingDate.create({
    bookingId, checkinDate, checkoutDate,
  });
};
