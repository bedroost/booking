const faker = require('faker');

const randomId = faker.random.uuid();
const randomNumber = faker.random.number();
const randomDate = faker.date.recent();

console.log(randomId, randomNumber, randomDate);
