require('dotenv').config();
require('../lib/utils/connect')();

const seedData = require('./seedData');
const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../lib/app');

describe('tweets route', () => {

  beforeEach(() => {
    return seedData(1000);
  });

  afterEach(() => {
    return mongoose.connection.dropDatabase();
  });

  it('can get a list of tweets', () => {
    return request(app)
      .get('/tweets')
      .then(res => res.body)
      .then(tweets => {
        expect(tweets).toHaveLength(1000);
      });
  });


});
