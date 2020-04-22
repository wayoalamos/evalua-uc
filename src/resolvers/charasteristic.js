const { combineResolvers } = require('graphql-resolvers');
const { isAdmin } = require('./authorization');

module.exports = {
  Query: {
    charasteristic: async (parent, args, { models }) => models.Charasteristic.findByPk(args.id),
    charasteristics: async (parent, args, { models }) => models.Charasteristic.findAll(),
  },
  Mutation: {
    createCharasteristic: combineResolvers(
      isAdmin,
      async (parent, { name }, { models }) => models.Charasteristic.create({
        name,
      }),
    ),
    deleteCharasteristic: combineResolvers(
      isAdmin,
      async (parent, { id }, { models }) => models.Charasteristic.destroy({ where: { id } }),
    ),
  },
};
