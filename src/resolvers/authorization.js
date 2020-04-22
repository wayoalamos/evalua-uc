const { combineResolvers, skip } = require('graphql-resolvers');

const { roles } = require('../consts');

const isBanned = (parent, args, { me }) => (me.banned ? new Error('User is banned') : skip);

const isAuthenticated = combineResolvers(
  isBanned,
  (parent, args, { me }) => (me ? skip : new Error('Not authenticated as user.')),
);

const isAdmin = combineResolvers(
  isAuthenticated,
  (parent, args, { me: { role } }) => (role === roles.ADMIN
    ? skip
    : new Error('Not authorized as admin.')),
);

const isOwner = async (model, me, id) => {
  const entity = await model.findByPk(id);
  if (entity === null) {
    throw new Error(`Entity not found with id ${id}`);
  }
  if (entity.userId !== me.id) {
    throw new Error('Not authenitcated as owner');
  }
  return skip;
};

module.exports = {
  isAuthenticated,
  isAdmin,
  isBanned,
  isOwner,
};
