module.exports = {
  Query: {
    me: (parent, args, { me }) => me,
    users: (parent, args, { models }) => (
      Object.values(models.users)
    ),
    user: (parent, args, { models }) => (
      models.users[args.id]
    ),
  },
  User: {
    projects: (parent, args, { models }) => Object.values(models.projects).filter(
      (project) => project.creator_id === parent.id,
    ),
  },
};
