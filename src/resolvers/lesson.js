const { combineResolvers } = require('graphql-resolvers');
const { isAdmin } = require('./authorization');
const { sequelize } = require('../models');

module.exports = {
  Query: {
    lesson: async (parent, args, { models }) => models.Lesson.findByPk(args.id),
    lessons: async (parent, args, { models }) => models.Lesson.findAll(),
    sortLessons: async (parent, args, { models }) => {
      // sort lessons by avg stars in evaluations with charasteristic id = 1
      const x = await models.Lesson.findAll({
        attributes: [
          'id',
          'semesters',
          'campusId',
          'courseId',
          [sequelize.fn('AVG', sequelize.col('evaluations.stars')), 'stars1Avg'],
        ],
        include: [
          {
            model: models.Evaluation,
            attributes: [],
            where: {
              charasteristicId: 1,
            },
          },
        ],
        group: 'lesson.id',
        order: [[sequelize.fn('AVG', sequelize.col('evaluations.stars')), 'DESC']],
      });
      return x;
    },
  },
  Lesson: {
    campus: async (parent) => parent.getCampus(),
    course: async (parent) => parent.getCourse(),
    profesors: async (parent) => parent.getProfesors(),
    comments: async (parent) => parent.getComments(),
    evaluations: async (parent) => parent.getEvaluations(),
    stars1Avg: async (parent) => parent.dataValues.stars1Avg,
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
