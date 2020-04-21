const { combineResolvers } = require('graphql-resolvers');
const { isAdmin } = require('./authorization');

module.exports = {
  Query: {
    lesson: async (parent, args, { models }) => models.Lesson.findByPk(args.id),
    lessons: async (parent, args, { models }) => models.Lesson.findAll(),
  },
  Lesson: {
    campus: async (parent, args, { models }) => models.Campus.findByPk(parent.campusId),
    course: async (parent, args, { models }) => models.Course.findByPk(parent.courseId),
    profesors: async (parent) => parent.getProfesors(),
  },
  Mutation: {
    createLesson: combineResolvers(
      isAdmin,
      async (parent, { semesters, campusId }, { models }) => models.Lesson.create({
        semesters,
        campusId,
      }),
    ),
    deleteLesson: combineResolvers(
      isAdmin,
      async (parent, { id }, { models }) => models.Lesson.destroy({ where: { id } }),
    ),
  },
};
