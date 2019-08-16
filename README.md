# Bedroost

Calendar booking module for a home sharing app. It is built in service-oriented architecture.

<br />
<p align='center'>
    <img src="https://gph.is/g/E3ggOYd" align="center" height="400px"/>
</p>

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
Database: PostgreSQL
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
