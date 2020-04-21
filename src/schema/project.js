const { gql } = require('apollo-server-express');

module.exports = gql`
    extend type Query {
        project(id: ID!): Project
        projects: [Project!]
    }
    extend type Mutation {
        createProject(title: String!, description: String): Project
    }
    type Project {
        id: ID!
        created: String!
        title: String!
        description: String
        creator: User
    }
`;
