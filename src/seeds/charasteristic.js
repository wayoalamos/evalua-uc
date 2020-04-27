const { models } = require('../models');

const createCharasteristics = async () => {
  await models.Charasteristic.create({
    id: 1,
    name: 'General',
  });
  await models.Charasteristic.create({
    id: 2,
    name: 'Exigencia',
  });
};

module.exports = { createCharasteristics };
