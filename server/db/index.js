const Sequelize = require('sequelize');
const chalk = require('chalk');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('booking', 'root', '', {
  host: '172.17.0.2',
  // host: 'localhost',
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => {
    console.log(chalk.green('Connection has been established successfully.'));
  })
  .catch((err) => {
    console.error(chalk.red('Unable to connect to the database:', err));
  });

const Listing = sequelize.define('listing', {
  reviews: { type: Sequelize.INTEGER },
  views: { type: Sequelize.INTEGER },
  basePrice: { type: Sequelize.INTEGER },
  guestFee: { type: Sequelize.INTEGER },
  cleaningFee: { type: Sequelize.INTEGER },
  serviceFee: { type: Sequelize.INTEGER },
  taxes: { type: Sequelize.INTEGER },
  baseGuests: { type: Sequelize.INTEGER },
  extraGuests: { type: Sequelize.INTEGER },
  maxGuests: { type: Sequelize.INTEGER },
  minNights: { type: Sequelize.INTEGER },
  maxNights: { type: Sequelize.INTEGER },
  lastAvailableDate: { type: Sequelize.DATEONLY },
}, {
  underscored: true,
});

const Booking = sequelize.define('booking', {
  bookedDate: { type: Sequelize.DATEONLY },
}, {
  underscored: true,
});

Listing.hasMany(Booking);
Booking.belongsTo(Listing);

module.exports.sequelize = sequelize;
module.exports.Listing = Listing;
module.exports.Booking = Booking;
