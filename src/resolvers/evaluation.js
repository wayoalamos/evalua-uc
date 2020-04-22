const { combineResolvers } = require('graphql-resolvers');
const { isAuthenticated, isOwner } = require('./authorization');

module.exports = {
  Query: {
    evaluation: async (parent, args, { models }) => models.Evaluation.findByPk(args.id),
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
      async (parent, { id }, { models, me }) => isOwner(models.Evaluation, me, id),
      async (parent, { id }, { models }) => models.Evaluation.destroy({ where: { id } }),
    ),
  },
};
