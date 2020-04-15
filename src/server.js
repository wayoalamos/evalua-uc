require('dotenv').config();

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const jwt = require('jsonwebtoken');

const schema = require('./schema');
const resolvers = require('./resolvers');
const { models, sequelize } = require('./models');

const app = express();
const port = 3000;

const eraseDatabaseOnSync = true;

const getMe = async (req) => {
  // console.log('getMe functions runing');
  const token = req.headers['x-token'];
  if (token) {
    try {
      return await jwt.verify(token, process.env.SECRET);
    } catch (err) {
      throw new Error(
        'Your session expired. Sign in again.',
      );
    }
  }
  return false;
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: async ({ req }) => ({
    models,
    me: await getMe(req),
    secret: process.env.SECRET,
  }),
  playground: process.env.NODE_ENV === 'development',
});

server.applyMiddleware({ app, path: '/' });

const createUsersWithProjects = async () => {
  await models.User.create(
    {
      email: 'user2@example.com',
      username: 'wayoalamos',
      password: '12345678',
      role: 'ADMIN',
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

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
  if (eraseDatabaseOnSync) {
    createUsersWithProjects();
  }
  app.listen(
    port,
    () => console.log('GraphQL server running on localhost:3000'),
  );
});
