const db = require('../db');
const seed = require('../db/seed.js');

module.exports.seedDb = () => {
  seed.generateData();
};

module.exports.getBookedDates = bookingId => db.BookingDate.findAll({
  attributes: ['checkinDate', 'checkoutDate'],
  where: { bookingId },
});
