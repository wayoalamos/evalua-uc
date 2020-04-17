const { models } = require('../models');
const { roles } = require('../consts');

const createUsersWithProjects = async () => {
  await models.User.create(
    {
      email: 'user2@example.com',
      username: 'wayoalamos',
      password: '12345678',
      role: roles.ADMIN,
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
      include: [models.Project],
    },
  );
  await models.User.create(
    {
      username: 'userexample2',
      email: 'user@example.com',
      password: '12345678',
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
};

module.exports = { createUsersWithProjects };
