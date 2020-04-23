const { combineResolvers } = require('graphql-resolvers');
const { isAuthenticated } = require('./authorization');

module.exports = {
  Query: {
    evaluation: async (
      parent, { charasteristicId, lessonId }, { models },
    ) => models.Evaluation.findOne({ where: { charasteristicId, lessonId } }),
    evaluations: async (parent, args, { models }) => models.Evaluation.findAll(),
  },
  Evaluation: {
    lesson: async (parent) => parent.getLesson(),
    creator: async (parent) => parent.getUser(),
    charasteristic: async (parent) => parent.getCharasteristic(),
  },
  Mutation: {
    createEvaluation: combineResolvers(
      isAuthenticated,
      async (
        parent, { stars, lessonId, charasteristicId }, { models, me },
      ) => models.Evaluation.create(
        {
          stars, lessonId, charasteristicId, userId: me.id,
        },
      ),
    ),
    deleteEvaluation: combineResolvers(
      isAuthenticated,
      async (
        parent, { lessonId, charasteristicId }, { models, me },
      ) => models.Evaluation.destroy({ where: { lessonId, charasteristicId, userId: me.id } }),
    ),
  },
};
