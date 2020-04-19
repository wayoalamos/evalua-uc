const { gql } = require('apollo-server-express');
const userSchema = require('./user');
const projectSchema = require('./project');
const feedbackSchema = require('./feedback');
const campusSchema = require('./campus');

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`;

module.exports = [
  linkSchema,
  userSchema,
  projectSchema,
  feedbackSchema,
  campusSchema,
];
