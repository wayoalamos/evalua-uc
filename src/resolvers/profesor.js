const { combineResolvers } = require('graphql-resolvers');
const { isAdmin } = require('./authorization');

module.exports = {
  Query: {
    profesor: async (parent, args, { models }) => models.Profesor.findByPk(args.id),
    profesors: async (parent, args, { models }) => models.Profesor.findAll(),
  },
  Profesor: {
    lessons: async (parent) => parent.getLessons(),
  },
  Mutation: {
    createProfesor: combineResolvers(
      isAdmin,
      async (parent, { name, photo }, { models }) => models.Profesor.create({
        name,
        photo,
      }),
    ),
    deleteProfesor: combineResolvers(
      isAdmin,
      async (parent, { id }, { models }) => models.Profesor.destroy({ where: { id } }),
    ),
  },
};
