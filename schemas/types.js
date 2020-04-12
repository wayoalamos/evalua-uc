/* eslint-disable no-use-before-define */
const graphql = require('graphql');
const { db } = require('../pgAdaptor');

const {
  GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList,
} = graphql;


const ProjectType = new GraphQLObjectType({
  name: 'Project',
  type: 'Query',
  fields: () => ({
    id: { type: GraphQLID },
    created: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    creator: {
      type: UserType,
      async resolve(parentValue) {
        const query = `SELECT * FROM users WHERE id=${parentValue.creator_id}`;
        try {
          const res = await db.one(query);
          return res;
        } catch (err) {
          return err;
        }
      },
    },
  }),
});

const UserType = new GraphQLObjectType({
  name: 'User',
  type: 'Query',
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    joined: { type: GraphQLString },
    last_logged_in: { type: GraphQLString },
    projects: {
      type: new GraphQLList(ProjectType),
      async resolve(parentValue) {
        const query = `SELECT * FROM project WHERE creator_id=${parentValue.id}`;
        try {
          const res = await db.manyOrNone(query);
          return res;
        } catch (err) {
          return err;
        }
      },
    },
  }),
});

exports.UserType = UserType;
exports.ProjectType = ProjectType;
