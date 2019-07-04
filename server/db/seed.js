const chalk = require('chalk');
const moment = require('moment');
const faker = require('faker');
const db = require('../db');

const randomNumber = () => faker.random.number();
const randomDate = () => faker.date.future();

for (let i = 0; i < 100; i += 1) {
  db.Booking.create({
    reviews: randomNumber(),
    views: randomNumber(),
    nightly_price: randomNumber(),
  })
    .then((booking) => {
      console.log(chalk.green((`created booking ${booking.id} successfully`)));
    });

  const checkinDate = randomDate();
  const checkoutDate = moment(checkinDate).add(Math.floor(Math.random() * 10) + 1, 'day');
  console.log(chalk.blue(checkinDate, checkoutDate));

  db.BookingDate.create({
    booking_id: i + 1,
    checkin_date: checkinDate,
    checkout_date: checkoutDate,
  })
    .then((bookingDate) => {
      console.log(chalk.green((`created booking_date ${bookingDate.id} successfully`)));
    });
}
