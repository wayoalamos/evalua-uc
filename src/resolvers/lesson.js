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
    evaluations: async (parent) => parent.getEvaluations(),
  },
  Mutation: {
    createLesson: combineResolvers(
      isAdmin,
      async (parent, {
        semesters, campusId, courseId, profesorsIds,
      }, { models }) => {
        const newLesson = await models.Lesson.create({
          semesters,
          campusId,
          courseId,
        });
        const profesors = await Promise.all(profesorsIds.map((id) => models.Profesor.findByPk(id)));
        await newLesson.addProfesors(profesors);
        return newLesson;
      },
    ),
    deleteLesson: combineResolvers(
      isAdmin,
      async (parent, { id }, { models }) => models.Lesson.destroy({ where: { id } }),
    ),
  },
};
