const projectResolvers = require('./project');
const userResolvers = require('./user');
const feedbackResolvers = require('./feedback');

module.exports = [userResolvers, projectResolvers, feedbackResolvers];
