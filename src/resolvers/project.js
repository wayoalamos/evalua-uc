const { combineResolvers } = require('graphql-resolvers');
const { isAuthenticated } = require('./authorization');

module.exports = {
  Query: {
    project: async (parent, args, { models }) => models.Project.findByPk(args.id),
    projects: async (parent, args, { models }) => models.Project.findAll(),
  },
  Project: {
    creator: async (parent, args, { models }) => models.User.findByPk(parent.userId),
  },
  Mutation: {
    createProject: combineResolvers(
      isAuthenticated,
      async (parent, { title, description }, { me, models }) => models.Project.create({
        title,
        description,
        userId: me.id,
      }),
    ),
  },
};

// deleteMessage: async (parent, { id }, { models }) => {
//   return await models.Message.destroy({ where: { id } });
// },
