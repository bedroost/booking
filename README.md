# Bedroost

Calendar booking module for a home sharing app built in service-oriented architecture.
+
![bedroost png](https://i.ibb.co/k1C0h41/bedroost.png)
![bedroost gif](https://media.giphy.com/media/gKxi7Q2l04fHocMt4O/giphy.gif)

## Table of Contents

1. [Tech Stack](#tech-stack)
1. [Usage](#usage)
1. [Requirements](#requirements)
1. [RESTful API routes](#restful-api-routes)
1. [Related Projects](#related-projects)

## Tech Stack

Front-end: JavaScript, React, Redux, Webpack
<br />
Back-end: Node.js, Express
<br />
Database: MySQL
<br />
Testing: Jest, Enzyme, CirceCI

## Usage

```bash
# clone this repository
$ git clone https://github.com/bedroost/booking.git

# install dependencies
$ npm install

# seed mysql database
$ mysql -uroot < server/db/schema.sql
$ npm run seed

# bundle files with webpack
$ npm run build

# run the app!
$ npm start
```

## Requirements

- Nvm
- Node
- Git

## RESTful API routes
### GET Rooms and Booking Information

Endpoint: ```/api/rooms/:listingid```

**Success Response**:
  * An array of objects containing basic room and booking information with param ```listingid```
  * Response Code: 200
  * Expected Content:

```
{
  listingInfo:
  {
    baseGuests: 2
    basePrice: 327
    cleaningFee: 285
    createdAt: "2019-09-01T03:20:27.000Z"
    extraGuests: 0
    guestFee: 173
    id: 1
    lastAvailableDate: "2020-04-13"
    maxGuests: 2
    maxNights: 108
    minNights: 1
    reviews: 450
    serviceFee: 39
    taxes: 26
    updatedAt: "2019-09-01T03:20:27.000Z"
    views: 746
  },
  bookedDates: {
    0: {
      id: 1, bookedDate: "2019-11-03", createdAt: 
      "2019-09-01T03:20:27.000Z", updatedAt: 
      "2019-09-01T03:20:27.000Z", listingId: 1
    },
    1: {
      id: 2, bookedDate: "2019-07-02", createdAt: 
      "2019-09-01T03:20:27.000Z", updatedAt: 
      "2019-09-01T03:20:27.000Z", listingId: 1
    },
    2: {
      id: 3, bookedDate: "2019-12-23", createdAt: 
      "2019-09-01T03:20:27.000Z", updatedAt: 
      "2019-09-01T03:20:27.000Z", listingId: 1
    },
    3: {
      id: 4, bookedDate: "2019-06-04", createdAt: 
      "2019-09-01T03:20:27.000Z", updatedAt: 
      "2019-09-01T03:20:27.000Z", listingId: 1
    }
  }
}
```

**Error Response**: 
  * Response Code: 404

## Related Projects

  - https://github.com/bedroost/gallery
  - https://github.com/bedroost/review
  - https://github.com/bedroost/description
