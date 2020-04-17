const { combineResolvers, skip } = require('graphql-resolvers');

const isAuthenticated = (parent, args, { me }) => (me ? skip : new Error('Not authenticated as user.'));

const isAdmin = combineResolvers(
  isAuthenticated,
  (parent, args, { me: { role } }) => (role === 'ADMIN'
    ? skip
    : new Error('Not authorized as admin.')),
);


module.exports = { isAuthenticated, isAdmin };
