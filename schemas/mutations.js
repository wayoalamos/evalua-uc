const graphql = require('graphql');
const { db } = require('../pgAdaptor');

const {
  GraphQLObjectType, GraphQLID, GraphQLString,
} = graphql;
const { ProjectType } = require('./types');

const RootMutation = new GraphQLObjectType({
  name: 'RootMutationType',
  type: 'Mutation',
  fields: {
    addProject: {
      type: ProjectType,
      args: {
        creatorId: { type: GraphQLID },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
      },
      async resolve(parentValue, args) {
        const query = 'INSERT INTO project(creator_id, created, title, description) VALUES ($1, $2, $3, $4) RETURNING title';
        const values = [
          args.creatorId,
          new Date(),
          args.title,
          args.description,
        ];

        try {
          const res = await db
            .one(query, values);
          return res;
        } catch (err) {
          return err;
        }
      },
    },
  },
});

exports.mutation = RootMutation;
