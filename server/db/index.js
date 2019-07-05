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

const Booking = sequelize.define('booking', {
  reviews: Sequelize.INTEGER,
  views: Sequelize.INTEGER,
  nightly_price: Sequelize.INTEGER,
  cleaning_fee: Sequelize.INTEGER,
  service_fee: Sequelize.INTEGER,
  occupancy_fee_taxes: Sequelize.INTEGER,
  adult_guests: Sequelize.INTEGER,
  children_guests: Sequelize.INTEGER,
  max_guests: Sequelize.INTEGER,
  max_months: Sequelize.INTEGER,
});

const BookingDate = sequelize.define('booking_date', {
  booking_id: Sequelize.INTEGER,
  checkin_date: Sequelize.DATE,
  checkout_date: Sequelize.DATE,
});

// Booking.sync({ force: false }).then(() => {
//   Booking.findAll({}).then((bookings) => {
//     bookings.forEach((booking) => {
//       console.log(booking.dataValues);
//     });
//   });
// });

module.exports.Booking = Booking;
module.exports.BookingDate = BookingDate;
