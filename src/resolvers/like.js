const { combineResolvers } = require('graphql-resolvers');
const { isAuthenticated } = require('./authorization');

module.exports = {
  Query: {
    like: async (parent, args, { models }) => models.Like.findByPk(args.id),
    likes: async (parent, args, { models }) => models.Like.findAll(),
    likeComment: async (parent, { commentId }, { models, me }) => {
      const like = await models.Like.findOne({ where: { commentId, userId: me.id } });
      return like === null ? like : like.isLike;
    },
  },
  Like: {
    creator: async (parent) => parent.getUser(),
    comment: async (parent) => parent.getComment(),
  },
  Mutation: {
    executeLike: combineResolvers(
      isAuthenticated,
      async (parent, { commentId, isLike }, { models, me }) => {
        const like = await models.Like.findOne({ where: { commentId, userId: me.id } });
        if (like === null) {
          return models.Like.create({
            commentId,
            isLike,
            userId: me.id,
          });
        }
        like.destroy();
        if (like.isLike !== isLike) {
          return models.Like.create({
            commentId,
            isLike,
            userId: me.id,
          });
        }
        return null;
      },
    ),
  },
};
