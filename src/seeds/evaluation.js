const { models } = require('../models');

const createEvaluations = async () => {
  // lessonId: 1
  await models.Evaluation.create({
    id: 1,
    stars: 2,
    lessonId: 1,
    userId: 1,
    charasteristicId: 1,
  });
  await models.Evaluation.create({
    id: 1,
    stars: 7,
    lessonId: 1,
    userId: 2,
    charasteristicId: 1,
  });
  await models.Evaluation.create({
    id: 1,
    stars: 10,
    lessonId: 1,
    userId: 3,
    charasteristicId: 1,
  });
  await models.Evaluation.create({
    id: 1,
    stars: 10,
    lessonId: 1,
    userId: 1,
    charasteristicId: 2,
  });

  // lessonId: 2
  await models.Evaluation.create({
    id: 1,
    stars: 10,
    lessonId: 2,
    userId: 1,
    charasteristicId: 1,
  });
  await models.Evaluation.create({
    id: 2,
    stars: 9,
    lessonId: 2,
    userId: 3,
    charasteristicId: 1,
  });
};

module.exports = { createEvaluations };
