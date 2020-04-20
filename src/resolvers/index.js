const projectResolvers = require('./project');
const userResolvers = require('./user');
const feedbackResolvers = require('./feedback');
const campusResolvers = require('./campus');
const profesorResolvers = require('./profesor');
const courseResolvers = require('./course');

module.exports = [
  userResolvers,
  projectResolvers,
  feedbackResolvers,
  campusResolvers,
  profesorResolvers,
  courseResolvers,
];
