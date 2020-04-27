const { createUsers } = require('./user');
const { createCampuses } = require('./campus');
const { createCharasteristics } = require('./charasteristic');
const { createLessonProfesors } = require('./lessonProfesor');
const { createCourses } = require('./course');
const { createComments } = require('./comment');
const { createEvaluations } = require('./evaluation');
const { createLikes } = require('./like');

const createSeeds = async () => {
  await createUsers();
  await createCampuses();
  await createCharasteristics();
  await createCourses();
  await createLessonProfesors();
  await createComments();
  await createLikes();
  await createEvaluations();
};

module.exports = { createSeeds };
