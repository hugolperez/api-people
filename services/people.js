const MongoLib = require ('../lib/mongo');

class PeopleService {
  constructor() {
    this.collection = 'people';
    this.mongoDB = new MongoLib();
  }

  async getPeople({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const people = await this.mongoDB.getAll(this.collection, query);
    return people || [];
  }

  async getPerson({ personId }) {
    const person = await this.mongoDB.get(this.collection, personId);
    return person || {};
  }

  async createPerson({ person }) {
    const createPersonId = await this.mongoDB.create(this.collection, person);
    return createPersonId;
  }

  async updatePerson({ personId, person } = {}) {
    const updatePersonId = await this.mongoDB.update(this.collection, personId, person);
    return updatePersonId;
  }

  async deletePerson({ personId }) {
    const deletePersonId = await this.mongoDB.delete(this.collection, personId);
    return deletePersonId;
  }
}

module.exports = PeopleService;