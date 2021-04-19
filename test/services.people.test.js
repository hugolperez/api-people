const assert = require('assert');
const proxyquire = require('proxyquire');

const { MongoLibMock, getAllStub } = require('../utils/mocks/mongoLib');
const { peopleMock } = require('../utils/mocks/people');

describe('services - people', function() {
  const PeopleServices = proxyquire('../services/people', {
    '../lib/mongo': MongoLibMock
  });

  const peopleService = new PeopleServices();

  describe('when getPeople method is called', async function() {
    it('should call the getAll MongoLib method', async function() {
      await peopleService.getPeople({});
      assert.strictEqual(getAllStub.called, true);
    });

    it('should return an array of people', async function() {
      const result = await peopleService.getPeople({});
      const expected = peopleMock;
      assert.deepEqual(result, expected);
    });
  });
});