const { combineResolvers } = require('graphql-resolvers');
const { isAuthenticated, isOwner } = require('./authorization');

module.exports = {
  Like: {
    creator: async (parent) => parent.getUser(),
    comment: async (parent) => parent.getComment(),
  },
  Mutation: {
    createLike: combineResolvers(
      isAuthenticated,
      async (parent, { isLike, commentId }, { models, me }) => models.Like.create(
        { commentId, isLike, userId: me.id },
      ),
    ),
    deleteLike: combineResolvers(
      isAuthenticated,
      async (parent, { id }, { models, me }) => isOwner(models.Like, me, id),
      async (parent, { id }, { models }) => models.Like.destroy({ where: { id } }),
    ),
  },
};
