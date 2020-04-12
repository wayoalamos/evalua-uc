require('dotenv').config();

const express = require('express');
const expressGraphQl = require('express-graphql');
const graphql = require('graphql');

const { GraphQLSchema } = graphql;
const { query } = require('./schemas/queries');
const { mutation } = require('./schemas/mutations');

const port = 3000;
const app = express();

const schema = new GraphQLSchema({
  query,
  mutation,
});

app.use(
  '/',
  expressGraphQl({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  }),
);

app.listen(port, () => console.log('GraphQL server running on localhost:3000'));
