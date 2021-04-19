const express = require('express');
const PeopleService = require('../services/people');

const {
  peopleIdSchema,
  createPersonSchema,
  updatePersonSchema,
} = require('../utils/schemas/people');
const validationHandler = require('../utils/middleware/validationHandlers');

function peopleApi(app) {
  const peopleService = new PeopleService();
  const router = express.Router();
  app.use('/api/people', router);

  router.get('/', async function (req, res, next) {
    const { tags } = req.query;

    try {
      const people = await peopleService.getPeople({ tags });

      res.status(200).json({ data: people, message: 'People listed' });
    } catch (error) {
      next(error);
    }
  });

  router.get(
    '/:personId',
    validationHandler({ personId: peopleIdSchema }, 'params'),
    async function (req, res, next) {
      const { personId } = req.params;

      try {
        const person = await peopleService.getPerson({ personId });

        res.status(200).json({ data: person, message: 'person retrieved' });
      } catch (error) {
        next(error);
      }
    }
  );

  router.post('/', validationHandler(createPersonSchema), 
    async function (req, res, next) {
      const { body: person } = req;

      try {
        const createPersonId = await peopleService.createPerson({ person });

        res.status(201).json({ data: createPersonId, message: 'Person created' });
      } catch (error) {
        next(error);
      }
    }
  );

  router.put(
    '/:personId',
    validationHandler({ personId: peopleIdSchema }, 'params'),
    validationHandler(updatePersonSchema),
    async function (req, res, next) {
      const personId = req.params.personId;
      const { body: person } = req;

      try {
        const updatePersonId = await peopleService.updatePerson({
          personId,
          person,
        });

        res
          .status(200)
          .json({ data: updatePersonId, message: 'Person updated' });
      } catch (error) {
        next(error);
      }
    }
  );

  router.delete(
    '/:personId',
    validationHandler({ personId: peopleIdSchema }, 'params'),
    async function (req, res, next) {
      const { personId } = req.params;

      try {
        const deletePersonId = await peopleService.deletePerson({ personId });

        res
          .status(200)
          .json({ data: deletePersonId, message: 'Person deleted' });
      } catch (error) {
        next(error);
      }
    }
  );
}

module.exports = peopleApi;
