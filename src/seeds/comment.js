const { models } = require('../models');

const createComments = async () => {
  await models.Comment.create({
    id: 1,
    content: 'esto es el primer comentario',
    lessonId: 1,
    userId: 1,
  });
  await models.Comment.create({
    id: 2,
    content: 'esto es el segundo s',
    lessonId: 1,
    userId: 1,
  });
  await models.Comment.create({
    id: 3,
    content: 'esto es el tercer s',
    lessonId: 2,
    userId: 1,
  });
};

module.exports = { createComments };
