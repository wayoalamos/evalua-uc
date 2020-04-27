const { models } = require('../models');

const createCourses = async () => {
  await models.Course.create(
    {
      id: 1,
      name: 'Matematicas Discretas',
      code: 'IIC1231',
    },
  );
  await models.Course.create(
    {
      id: 2,
      name: 'Sistemas Operativos',
      code: 'IIAAAA',
      description: 'curso de sistemas y de redes',
      category: 'No me acuerdo que mierda va aca',
      credits: 20,
      school: 'Ingenieria',
    },
  );
};

module.exports = { createCourses };
