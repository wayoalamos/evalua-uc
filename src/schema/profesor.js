const { gql } = require('apollo-server-express');

module.exports = gql`
    extend type Query {
        profesor(id: ID!): Profesor
        profesors: [Profesor!]!
    }
    extend type Mutation {
        createProfesor(name: String!, photo: String): Profesor
        deleteProfesor(id: Int!): Boolean!
    }
    type Profesor {
        id: ID!
        name: String!
        photo: String
        lessons: [Lesson!]
    }
`;
