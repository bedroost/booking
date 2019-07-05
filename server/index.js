const express = require('express');
const morgan = require('morgan');
const path = require('path');
const db = require('./db');

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(express.static(path.resolve('client', 'dist')));

app.get('/api/booking/:id', (req, res) => {
  console.log(req.params);
  db.BookingDate.findAll({
    attributes: ['checkin_date', 'checkout_date'],
    where: { booking_id: req.params.id },
  })
    .then(bookings => res.send(bookings));
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
