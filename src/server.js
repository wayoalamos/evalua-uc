require('dotenv').config();

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const jwt = require('jsonwebtoken');

const schema = require('./schema');
const resolvers = require('./resolvers');
const { createSeeds } = require('./seeds');
const { models, sequelize } = require('./models');

const app = express();
const port = 8080;

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

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
  if (eraseDatabaseOnSync) {
    createSeeds();
  }
  app.listen(
    port,
    () => console.log('GraphQL server running on localhost:3000'),
  );
});
