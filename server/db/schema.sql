USE booking;

DROP TABLE IF EXISTS bookings;

CREATE TABLE bookings (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  reviews INT DEFAULT 0,
  views INT DEFAULT 0,
  nightly_price INT,
  cleaning_fee INT DEFAULT 0,
  service_fee INT DEFAULT 0,
  occupancy_fee_taxes INT DEFAULT 0,
  adult_guests INT DEFAULT 1,
  children_guests INT DEFAULT 0,
  max_guests INT DEFAULT 5,
  max_months INT DEFAULT 3,
  `createdAt` DATE NOT NULL,
  `updatedAt` DATE NOT NULL
);

DROP TABLE IF EXISTS booking_dates;

CREATE TABLE booking_dates (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  booking_id INT NOT NULL,
  checkin_date DATE NOT NULL,
  checkout_date DATE NOT NULL,
  `createdAt` DATE NOT NULL,
  `updatedAt` DATE NOT NULL
);
