const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('booking', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const Booking = sequelize.define('booking');
const BookingDate = sequelize.define('booking_date');

module.exports.Booking = Booking;
module.exports.BookingDate = BookingDate;
