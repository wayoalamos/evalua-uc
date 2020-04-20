const { combineResolvers } = require('graphql-resolvers');
const { isAdmin } = require('./authorization');

module.exports = {
  Query: {
    course: async (parent, args, { models }) => models.Course.findByPk(args.id),
    courses: async (parent, args, { models }) => models.Course.findAll(),
  },
  Mutation: {
    createCourse: combineResolvers(
      isAdmin,
      async (
        parent,
        {
          name, code, description, category, credits, school,
        },
        { models }) => models.Course.create({
        name,
        code,
        description,
        category,
        credits,
        school,
      }),
    ),
    deleteCourse: combineResolvers(
      isAdmin,
      async (parent, { id }, { models }) => models.Course.destroy({ where: { id } }),
    ),
  },
};
