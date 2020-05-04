const { combineResolvers } = require('graphql-resolvers');
const { isAdmin, isAuthenticated } = require('./authorization');

module.exports = {
  Query: {
    comment: async (parent, args, { models }) => models.Comment.findByPk(args.id),
    comments: async (parent, args, { models }) => models.Comment.findAll(),
  },
  Comment: {
    lesson: async (parent) => parent.getLesson(),
    creator: async (parent) => parent.getUser(),
    likes: async (parent) => parent.getLikes(),
    likesCount: async (parent, { like }, { models }) => models.Like.count({
      where: {
        commentId: parent.id,
        isLike: like,
      },
    }),
  },
  Mutation: {
    createComment: combineResolvers(
      isAuthenticated,
      async (parent, { content, lessonId }, { models, me }) => models.Comment.create(
        { content, lessonId, userId: me.id },
      ),
    ),
    deleteComment: combineResolvers(
      isAdmin,
      async (parent, { id }, { models }) => models.Comment.destroy({ where: { id } }),
    ),
  },
};
