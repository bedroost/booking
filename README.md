# Bedroost

Calendar booking module for a home sharing app built in service-oriented architecture.

![bedroost gif](https://media.giphy.com/media/gKxi7Q2l04fHocMt4O/giphy.gif)

## Table of Contents

1. [Tech Stack](#tech-stack)
1. [Usage](#usage)
1. [Requirements](#requirements)
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
$ npm install webpack
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

## Related Projects

  - https://github.com/bedroost/gallery
  - https://github.com/bedroost/review
  - https://github.com/bedroost/description
