const projectResolvers = require('./project');
const userResolvers = require('./user');
const feedbackResolvers = require('./feedback');
const campusResolvers = require('./campus');

module.exports = [
  userResolvers,
  projectResolvers,
  feedbackResolvers,
  campusResolvers,
];
