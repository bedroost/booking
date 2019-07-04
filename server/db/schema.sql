USE DATABASE booking;

DROP TABLE IF EXISTS booking;

CREATE TABLE booking (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  reviews INT DEFAULT 0,
  views INT DEFAULT 0,
  nightly_price INT NOT NULL,
  cleaning_fee INT DEFAULT 0,
  service_fee INT DEFAULT 0,
  occupancy_fee_taxes INT DEFAULT 0,
  adult_guests INT DEFAULT 1,
  children_guests INT DEFAULT 0,
  infant_guests INT DEFAULT 0,
  max_months INT DEFAULT 3
);

CREATE TABLE booking_date (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  booking_id INT NOT NULL,
  booked_date DATE NOT NULL
);
