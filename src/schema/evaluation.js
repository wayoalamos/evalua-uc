const { gql } = require('apollo-server-express');

module.exports = gql`
    extend type Query {
        evaluation(id: ID!): Evaluation
        evaluations: [Evaluation!]!
    }
    extend type Mutation {
        createEvaluation(lessonId: ID!, stars: Int!): Evaluation
        deleteEvaluation(id: ID!): Boolean!
    }
    type Evaluation {
        id: ID!
        stars: Int
        creator: User!
        lesson: Lesson!
    }
`;
