module.exports = {
  Query: {
    project: (parent, args, { models }) => (
      models.projects[args.id]
    ),
    projects: (parent, args, { models }) => (
      Object.values(models.projects)
    ),
  },
  Project: {
    creator: (parent, args, { models }) => Object.values(models.users).find(
      (user) => user.id === parent.creator_id,
    ),
  },
  Mutation: {
    createProject: (parent, { title, description }, { me }) => {
      const project = {
        id: 3,
        created: 'now',
        title,
        description,
        creator_id: me.id,
      };
      // models.projects[project.id] = project;
      return project;
    },
  },
};
