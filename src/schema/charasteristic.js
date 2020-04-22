const { gql } = require('apollo-server-express');

module.exports = gql`
    extend type Query {
        charasteristic(id: ID!): Charasteristic
        charasteristics: [Charasteristic!]!
    }
    extend type Mutation {
        createCharasteristic(name: String!): Charasteristic!
        deleteCharasteristic(id: ID!): Boolean!
    }
    type Charasteristic {
        id: ID!
        name: String!
    }
`;
