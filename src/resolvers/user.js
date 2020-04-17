const jwt = require('jsonwebtoken');
const { combineResolvers } = require('graphql-resolvers');
const { isAdmin } = require('./authorization');


const createToken = async (user, secret, expiresIn) => {
  const {
    id, email, username, role,
  } = user;
  return jwt.sign({
    id, email, username, role,
  }, secret, { expiresIn });
};

module.exports = {
  Query: {
    me: (parent, args, { me }) => me,
    user: async (parent, args, { models }) => models.User.findByPk(args.id),
    users: async (parent, args, { models }) => models.User.findAll(),
  },
  Mutation: {
    signUp: async (
      parent,
      { username, email, password },
      { models, secret },
    ) => {
      const user = await models.User.create({
        username,
        email,
        password,
      });
      return { token: createToken(user, secret, '7d') };
    },
    signIn: async (
      parent,
      { login, password },
      { models, secret },
    ) => {
      const user = await models.User.findByLogin(login);
      if (!user) {
        throw new Error('No user found with this login credentials.');
      }
      const isValid = await user.validatePassword(password);
      if (!isValid) {
        throw new Error('Invalid password.');
      }
      return { token: createToken(user, secret, '7d') };
    },
    deleteUser: combineResolvers(
      isAdmin,
      async (parent, { id }, { models }) => models.User.destroy({
        where: { id },
      }),
    ),
  },
  User: {
    projects: async (parent, args, { models }) => models.Project.findAll(
      { where: { userId: parent.id } },
    ),
  },
};
