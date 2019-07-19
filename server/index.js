const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
// const db = require('./db');
const models = require('./models');

const app = express();
const port = 3001;
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use('/rooms/:listingid', express.static(path.resolve('client')));
app.use(express.json());

app.get('/api/:listingid/booking', async (req, res) => {
  const listingInfo = await models.getListingInfo(req.params.listingid);
  const bookedDates = await models.getBookedDates(req.params.listingid);
  const bookedDatesObj = {};
  bookedDates.forEach((el) => {
    bookedDatesObj[el.bookedDate] = true;
  });
  res.send({ listingInfo, bookedDatesObj });
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
