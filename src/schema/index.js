const { gql } = require('apollo-server-express');
const userSchema = require('./user');
const projectSchema = require('./project');
const feedbackSchema = require('./feedback');
const campusSchema = require('./campus');
const profesorSchema = require('./profesor');
const courseSchema = require('./course');
const lessonSchema = require('./lesson');
const commentSchema = require('./comment');
const likeSchema = require('./like');
const evaluationSchema = require('./evaluation');
const charasteristicSchema = require('./charasteristic');


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
  profesorSchema,
  courseSchema,
  lessonSchema,
  commentSchema,
  likeSchema,
  evaluationSchema,
  charasteristicSchema,
];
