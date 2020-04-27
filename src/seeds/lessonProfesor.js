const { models } = require('../models');

const createLessonProfesors = async () => {
  const p1 = await models.Profesor.create(
    {
      id: 1,
      name: 'Marcelo Cornejo',
    },
  );
  const p2 = await models.Profesor.create(
    {
      id: 2,
      name: 'Raimundo Soto',
      photo: 'www.estoesellindeunafoto.cl',
    },
  );
  const l1 = await models.Lesson.create(
    {
      id: 1,
      semesters: [0, 1, 2, 3, 4, 5],
      campusId: 1,
      courseId: 1,
    },
  );
  await l1.addProfesors([p1, p2]);
  await models.Lesson.create(
    {
      id: 2,
      semesters: [0, 4, 5],
      campusId: 2,
      courseId: 2,
    },
  );
};

module.exports = { createLessonProfesors };
