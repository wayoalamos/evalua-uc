const { models } = require('../models');

const createCampuses = async () => {
  await models.Campus.create(
    {
      id: 1,
      name: 'San Joaquin',
    },
  );
  await models.Campus.create(
    {
      id: 2,
      name: 'Lo Contador',
    },
  );
  await models.Campus.create(
    {
      id: 3,
      name: 'Casa Central',
    },
  );
};

module.exports = { createCampuses };
