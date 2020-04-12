const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const UserType = new GraphQLObjectType({
  name: 'User',
  type: 'Query',
  fields: {
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    joined: { type: GraphQLString },
    last_logged_in: { type: GraphQLString },
  },
});

const ProjectType = new GraphQLObjectType({
  name: 'Project',
  type: 'Query',
  fields: {
    id: { type: GraphQLID },
    creator_id: { type: GraphQLID },
    created: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
  },
});

exports.UserType = UserType;
exports.ProjectType = ProjectType;
