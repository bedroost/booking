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
  reviews: { type: Sequelize.INTEGER, defaultValue: 0 },
  views: { type: Sequelize.INTEGER, defaultValue: 0 },
  price: { type: Sequelize.INTEGER, allowNull: false },
  cleaningFee: { type: Sequelize.INTEGER, defaultValue: 0 },
  serviceFee: { type: Sequelize.INTEGER, defaultValue: 0 },
  occupancyFeePlusTaxes: { type: Sequelize.INTEGER, defaultValue: 0 },
  adultGuests: { type: Sequelize.INTEGER, defaultValue: 1 },
  childrenGuests: { type: Sequelize.INTEGER, defaultValue: 0 },
  maxGuests: { type: Sequelize.INTEGER, defaultValue: 5 },
  minNights: { type: Sequelize.INTEGER, defaultValue: 1 },
  maxNights: { type: Sequelize.INTEGER, defaultValue: 30 },
}, {
  underscored: true,
});

const BookingDate = sequelize.define('booking_date', {
  checkinDate: { type: Sequelize.DATEONLY, allowNull: false },
  checkoutDate: { type: Sequelize.DATEONLY, allowNull: false },
}, {
  underscored: true,
});

// will also add bookingId to BookingDate model, but field will be set to `booking_id`
Booking.hasMany(BookingDate);
BookingDate.belongsTo(Booking);

// Booking.sequelize
//   .query('SET FOREIGN_KEY_CHECKS = 0', null, { raw: true })
Booking.sync({ force: false });
BookingDate.sync({ force: false });

module.exports.Booking = Booking;
module.exports.BookingDate = BookingDate;
