const { combineResolvers } = require('graphql-resolvers');
const { isAdmin } = require('./authorization');

module.exports = {
  Query: {
    campus: async (parent, args, { models }) => models.Campus.findByPk(args.id),
    campuses: async (parent, args, { models }) => models.Campus.findAll(),
  },
  Campus: {
    lessons: async (parent) => parent.getLessons(),
  },
  Mutation: {
    createCampus: combineResolvers(
      isAdmin,
      async (parent, { name }, { models }) => models.Campus.create({
        name,
      }),
    ),
    deleteCampus: combineResolvers(
      isAdmin,
      async (parent, { id }, { models }) => models.Campus.destroy({ where: { id } }),
    ),
  },
};
