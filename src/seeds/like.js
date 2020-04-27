const { models } = require('../models');

const createLikes = async () => {
  await models.Like.create({
    id: 1,
    userId: 1,
    commentId: 2,
    isLike: true,
  });
  await models.Like.create({
    id: 2,
    userId: 1,
    commentId: 1,
    isLike: false,
  });
};

module.exports = { createLikes };
