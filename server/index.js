const express = require('express');
const morgan = require('morgan');
const path = require('path');
const db = require('./db');
const models = require('./models');

const app = express();
const port = 3001;

app.use(morgan('dev'));
app.use('/rooms/:listingid', express.static(path.resolve('client')));
app.use(express.json());

app.get('/api/:listingid/booking', async (req, res) => {
  console.log(req.params);
  const listingInfo = await models.getListingInfo(req.params.listingid);
  const bookedDates = await models.getBookedDates(req.params.listingid);
  res.send({ listingInfo, bookedDates });
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
