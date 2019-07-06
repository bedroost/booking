const faker = require('faker');
const db = require('../db');

const listings = [];
const bookings = [];

for (let i = 0; i < 100; i += 1) {
  const listingInfo = {
    reviews: faker.random.number({ min: 0, max: 1000 }),
    views: faker.random.number({ min: 0, max: 1000 }),
    basePrice: faker.random.number({ min: 20, max: 500 }),
    cleaningFee: faker.random.number({ min: 20, max: 500 }),
    baseGuests: faker.random.number({ min: 1, max: 10 }),
    extraGuests: faker.random.number({ min: 0, max: 10 }),
    minNights: faker.random.number({ min: 1, max: 10 }),
  };
  listingInfo.guestFee = faker.random.number({ min: 0, max: listingInfo.basePrice });
  listingInfo.maxNights = listingInfo.minNights + faker.random.number({ min: 0, max: 355 });

  listings.push(listingInfo);
  for (let j = 0; j < 200; j += 1) {
    const bookingInfo = {
      listingId: i + 1,
      bookedDate: faker.date.between('2019-06-01', '2020-05-31'),
    };
    bookings.push(bookingInfo);
  }
}
// console.log(listings)
Promise.all([
  db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0'),
  db.Booking.drop(),
  db.Listing.drop(),
  db.sequelize.sync({ force: false }),
  db.Booking.bulkCreate(bookings),
  db.Listing.bulkCreate(listings),
]).catch(err => console.log('db error: ', err));
