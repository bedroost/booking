const SequelizeMock = require('sequelize-mock');
const proxyquire = require('proxyquire');

const dbMock = new SequelizeMock();

const BookingMock = dbMock.define('booking', {
  id: 1,
  maxMonths: 3,
});

const BookingDateMock = dbMock.define('booking_date', {
  checkinDate: new Date(2019, 7, 1),
  checkoutDate: new Date(2019, 7, 15),
});

BookingMock.hasMany(BookingDateMock);
BookingDateMock.belongsTo(BookingMock);

const myModule = proxyquire('../models', {
  'db.BookingDate': BookingDateMock,
});
console.log('myModule', myModule);

describe('get booked dates', () => {
  it('should have the checkin and checkout dates', (done) => {
    myModule.getBookedDates(1)
      .then((bookingDates) => {
        expect(bookingDates[0].checkinDate).toEqual('2019-07-01');
        expect(bookingDates[0].checkoutDate).toEqual('2019-07-15');
        done();
      }).catch(done);
  });
});
