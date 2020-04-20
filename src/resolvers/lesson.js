const { combineResolvers } = require('graphql-resolvers');
const { isAdmin } = require('./authorization');

module.exports = {
  Query: {
    lesson: async (parent, args, { models }) => models.Lesson.findByPk(args.id),
    lessons: async (parent, args, { models }) => models.Lesson.findAll(),
  },
  Mutation: {
    createLesson: combineResolvers(
      isAdmin,
      async (parent, { semesters }, { models }) => models.Lesson.create({
        semesters,
      }),
    ),
    deleteLesson: combineResolvers(
      isAdmin,
      async (parent, { id }, { models }) => models.Lesson.destroy({ where: { id } }),
    ),
  },
};
