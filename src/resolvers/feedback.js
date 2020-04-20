const { combineResolvers } = require('graphql-resolvers');
const { isAuthenticated, isBanned, isAdmin } = require('./authorization');

module.exports = {
  Query: {
    feedback: async (parent, args, { models }) => models.Feedback.findByPk(args.id),
    feedbacks: async (parent, args, { models }) => models.Feedback.findAll(),
  },
  Feedback: {
    creator: async (parent, args, { models }) => models.User.findByPk(parent.userId),
  },
  Mutation: {
    createFeedback: combineResolvers(
      isAuthenticated,
      isBanned,
      async (parent, { title, description }, { me, models }) => models.Feedback.create({
        title,
        description,
        userId: me.id,
      }),
    ),
    deleteFeedback: combineResolvers(
      isAdmin,
      async (parent, { id }, { models }) => models.Feedback.destroy({ where: { id } }),
    ),
  },
};
