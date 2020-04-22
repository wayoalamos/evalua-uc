const { gql } = require('apollo-server-express');

module.exports = gql`
    extend type Query {
        campus(id: ID!): Campus
        campuses: [Campus!]!
    }
    extend type Mutation {
        createCampus(name: String!): Campus!
        deleteCampus(id: ID!): Boolean!
    }
    type Campus {
        id: ID!
        name: String!
        lessons: [Lesson!]!
    }
`;

// TODO: Add lessons to schema
