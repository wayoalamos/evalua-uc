const { models } = require('../models');
const { roles } = require('../consts');

const createUsers = async () => {
  await models.User.create(
    {
      id: 1,
      email: 'user1@example.com',
      username: 'a',
      password: '12345678',
      phone: '123456789',
      role: roles.ADMIN,
    },
  );
  await models.User.create(
    {
      id: 2,
      username: 'b',
      email: 'user2@example.com',
      password: '12345678',
      banned: true,
    },
  );
  await models.User.create(
    {
      id: 3,
      email: 'user3@example.com',
      username: 'c',
      password: '12345678',
    },
  );
};

module.exports = { createUsers };
