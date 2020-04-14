require('dotenv').config();

const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const schema = require('./schema');
const resolvers = require('./resolvers');
const { models, sequelize } = require('./models');

const app = express();
const port = 3000;

const eraseDatabaseOnSync = true;

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    models,
    me: async () => models.User.findByLogin('rwieruch'),
  },
  playground: process.env.NODE_ENV === 'development',
});

server.applyMiddleware({ app, path: '/' });

const createUsersWithProjects = async () => {
  await models.User.create(
    {
      username: 'wayoalamos',
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

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
  if (eraseDatabaseOnSync) {
    createUsersWithProjects();
  }
  app.listen(
    port,
    () => console.log('GraphQL server running on localhost:3000'),
  );
});
