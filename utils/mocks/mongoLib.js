const sinon = require('sinon');

const { peopleMock } = require('./people');

const getAllStub = sinon.stub();
getAllStub.withArgs('people').resolves(peopleMock);

const query = {};
getAllStub.withArgs('people', query).resolves()

const createStub = sinon.stub().resolves(peopleMock[0].id);

class MongoLibMock {
  getAll(collection, query) {
    return getAllStub(collection, query);
  }

  create(collection, data) {
    return createStub(collection, data);
  }
}

module.exports = {
  getAllStub,
  createStub,
  MongoLibMock
}