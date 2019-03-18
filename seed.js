require('dotenv').config();
require('./lib/utils/connect')();
const seedData = require('./tests/seedData');

seedData(100)
  .then(() => console.log('done'))
  .catch(err =>  console.error(err));

