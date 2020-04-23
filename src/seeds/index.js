const { models } = require('../models');
const { roles } = require('../consts');

const createSeeds = async () => {
  await models.User.create(
    {
      email: 'user1@example.com',
      username: 'a',
      password: '12345678',
      role: roles.ADMIN,
      feedbacks: [
        {
          title: 'feedback title uno',
          description: 'feeedvacj desctiption uno',
        },
        {
          title: 'project title uno',
          description: 'desctiption uno',
        },
      ],
      projects: [
        {
          title: 'project title uno',
          description: 'desctiption uno',
        },
        {
          title: 'project title dos',
          description: 'desctiption dos',
        },
      ],
    },
    {
      include: [models.Project, models.Feedback],
    },
  );
  await models.User.create(
    {
      username: 'b',
      email: 'user2@example.com',
      password: '12345678',
      banned: true,
      projects: [
        {
          title: 'project title tres',
          description: 'desctiption tres',
        },
        {
          title: 'project title cc',
          description: 'desctiption cc',
        },
      ],
    },
    {
      include: [models.Project],
    },
  );
  await models.User.create(
    {
      email: 'user3@example.com',
      username: 'c',
      password: '12345678',
    },
  );
  await models.Campus.create(
    {
      name: 'San Joaquin',
    },
  );
  await models.Campus.create(
    {
      name: 'Lo Contador',
    },
  );
  await models.Campus.create(
    {
      name: 'Casa Central',
    },
  );
  const p1 = await models.Profesor.create(
    {
      name: 'Marcelo Cornejo',
    },
  );
  const p2 = await models.Profesor.create(
    {
      name: 'Raimundo Soto',
      photo: 'www.estoesellindeunafoto.cl',
    },
  );
  await models.Course.create(
    {
      name: 'Matematicas Discretas',
      code: 'IIC1231',
    },
  );
  await models.Course.create(
    {
      name: 'Sistemas Operativos',
      code: 'IIAAAA',
      description: 'curso de sistemas y de redes',
      category: 'No me acuerdo que mierda va aca',
      credits: 20,
      school: 'Ingenieria',
    },
  );
  const l1 = await models.Lesson.create(
    {
      semesters: [0, 1, 2, 3, 4, 5],
      campusId: 1,
      courseId: 1,
    },
  );
  await l1.addProfesors([p1, p2]);
  await models.Lesson.create(
    {
      semesters: [0, 4, 5],
      campusId: 2,
      courseId: 2,
    },
  );
  await models.Comment.create({
    content: 'esto es el primer comentario',
    lessonId: 1,
    userId: 1,
  });
  await models.Comment.create({
    content: 'esto es el segundo s',
    lessonId: 1,
    userId: 2,
  });
  await models.Comment.create({
    content: 'esto es el tercer s',
    lessonId: 2,
    userId: 2,
  });
  await models.Charasteristic.create({
    name: 'General',
  });
  await models.Charasteristic.create({
    name: 'Exigencia',
  });
  await models.Evaluation.create({
    stars: 2,
    lessonId: 2,
    userId: 1,
    charasteristicId: 1,
  });
  await models.Evaluation.create({
    stars: 3,
    lessonId: 2,
    userId: 2,
    charasteristicId: 1,
  });
  await models.Like.create({
    userId: 1,
    commentId: 2,
    isLike: true,
  });
  await models.Like.create({
    userId: 1,
    commentId: 1,
    isLike: false,
  });
};

module.exports = { createSeeds };
