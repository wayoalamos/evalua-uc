const { combineResolvers } = require('graphql-resolvers');
const { isAdmin } = require('./authorization');

module.exports = {
  Query: {
    lesson: async (parent, args, { models }) => models.Lesson.findByPk(args.id),
    lessons: async (parent, args, { models }) => models.Lesson.findAll(),
  },
  Lesson: {
    campus: async (parent) => parent.getCampus(),
    course: async (parent) => parent.getCourse(),
    profesors: async (parent) => parent.getProfesors(),
    comments: async (parent) => parent.getComments(),
  },
  Mutation: {
    createLesson: combineResolvers(
      isAdmin,
      async (parent, {
        semesters, campusId, courseId, profesorsId,
      }, { models }) => {
        const newLesson = models.Lesson.create({
          semesters,
          campusId,
          courseId,
        });
        newLesson.addProfesors(models.Profesor.findAll({ where: { id: 1 } }));
        return newLesson;
      },
    ),
    deleteLesson: combineResolvers(
      isAdmin,
      async (parent, { id }, { models }) => models.Lesson.destroy({ where: { id } }),
    ),
  },
};
