const assert = require('assert');
const proxyquire = require('proxyquire');

const { peopleMock, PeopleServiceMock } = require('../utils/mocks/people');
const testServer = require('../utils/testServer');

// para hacer los test.
describe('routes - people', function() {
  // indicamos la ruta y el mock.
  const route = proxyquire('../routes/people', {
    '../services/people': PeopleServiceMock
  });

  // cargamos el server y le indicamos la ruta.
  const request = testServer(route);

  describe('GET /people', function() {
    // debería responder con estatus 200
    it('should respond with status 200', function(done) {
      request.get('/api/people').expect(200, done);
    });

    // verificar que los datos a devolver son correctos
    it('should respond with the list of people', function(done) {
      request.get('/api/people').end((err, res) => {
        // deepEqual es para comparar objetos.
        assert.deepEqual(res.body, {
          data: peopleMock,
          message: 'People listed'
        });

        done(); // indicador de finalizar test
      });
    });

  });
});