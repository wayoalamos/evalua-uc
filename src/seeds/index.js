const { models } = require('../models');
const { roles } = require('../consts');

const createUsersWithProjects = async () => {
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
};

module.exports = { createUsersWithProjects };
