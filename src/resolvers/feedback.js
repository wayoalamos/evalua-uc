const { combineResolvers } = require('graphql-resolvers');
const { isAuthenticated } = require('./authorization');

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
      async (parent, { title, description, status = 'sent' }, { me, models }) => models.Feedback.create({
        title,
        description,
        userId: me.id,
        status,
      }),
    ),
  },
};
