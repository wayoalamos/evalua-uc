module.exports = {
  Query: {
    me: (parent, args, { me }) => me,
    user: async (parent, args, { models }) => models.User.findByPk(args.id),
    users: async (parent, args, { models }) => models.User.findAll(),
  },
  User: {
    projects: async (parent, args, { models }) => models.Project.findAll(
      { where: { userId: parent.id } },
    ),
  },
};
