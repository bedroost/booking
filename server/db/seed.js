const faker = require('faker');
const chalk = require('chalk');
const db = require('../db');

const listings = [];
const bookings = [];

for (let i = 0; i < 100; i += 1) {
  const listingInfo = {
    reviews: faker.random.number({ min: 0, max: 1000 }),
    views: faker.random.number({ min: 0, max: 1000 }),
    basePrice: faker.random.number({ min: 20, max: 500 }),
    cleaningFee: faker.random.number({ min: 20, max: 500 }),
    baseGuests: faker.random.number({ min: 1, max: 5 }) * 2,
    minNights: faker.random.number({ min: 1, max: 10 }),
  };
  listingInfo.guestFee = faker.random.number({ min: 0, max: listingInfo.basePrice });
  listingInfo.extraGuests = Math.round(
    listingInfo.baseGuests * faker.random.number({ min: 0, max: 0.5, precision: 0.1 }),
  );
  listingInfo.maxGuests = listingInfo.baseGuests + listingInfo.extraGuests;
  listingInfo.lastAvailableDate = faker.date.between('2019-09-01', '2020-05-31');
  listingInfo.maxNights = Math.max(listingInfo.minNights,
    faker.random.number({ min: 1, max: 355 }));
  listingInfo.taxes = Math.round(
    listingInfo.basePrice * faker.random.number({ min: 0.05, max: 0.2, precision: 0.01 }),
  );

  listings.push(listingInfo);

  for (let j = 0; j < 200; j += 1) {
    const bookingInfo = {
      listingId: i + 1,
      bookedDate: faker.date.between('2019-06-01', listingInfo.lastAvailableDate),
    };
    bookings.push(bookingInfo);
  }
}

Promise.all([
  db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0'),
  db.Booking.drop(),
  db.Listing.drop(),
  db.sequelize.sync({ force: false })
    .then(() => db.Listing.bulkCreate(listings))
    .then(() => db.Booking.bulkCreate(bookings))
    .then(() => db.sequelize.connectionManager.close())
    .then(() => console.log(chalk.green('shut down gracefully'))),
]).catch(err => console.log('db error: ', err));
