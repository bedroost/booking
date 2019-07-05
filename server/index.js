const express = require('express');
const morgan = require('morgan');
const path = require('path');
const db = require('./db');
const models = require('./models');

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(express.static(path.resolve('client', 'dist')));
app.use(express.json());

app.get('/api/:listingid/booking/', (req, res) => {
  console.log(req.params);
  models.getBookedDates(req.params.listingid)
    .then(bookedDates => res.send(bookedDates));
});

app.post('/api/:listingid/booking', (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
