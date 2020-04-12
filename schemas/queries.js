const { GraphQLObjectType, GraphQLID } = require('graphql');
const { db } = require('../pgAdaptor');
const { UserType, ProjectType } = require('./types');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  type: 'Query',
  fields: {
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      async resolve(parentValue, args) {
        const query = `SELECT * FROM project WHERE id=${args.id}`;
        try {
          const res = await db.one(query);
          return res;
        } catch (err) {
          return err;
        }
      },
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      async resolve(parentValue, args) {
        const query = `SELECT * FROM users WHERE id=${args.id}`;
        try {
          const res = await db.one(query);
          return res;
        } catch (err) {
          return err;
        }
      },
    },
  },
});

exports.query = RootQuery;
