const { gql } = require('apollo-server-express');

module.exports = gql`
    extend type Query {
        evaluation(lessonId: ID!, charasteristicId: ID!): Evaluation
        evaluations: [Evaluation!]!
    }
    extend type Mutation {
        createEvaluation(lessonId: ID!, stars: Int!, charasteristicId: ID!): Evaluation
        deleteEvaluation(lessonId: ID!, charasteristicId: ID!): Boolean!
    }
    type Evaluation {
        stars: Int
        creator: User!
        lesson: Lesson!
        charasteristic: Charasteristic!
    }
`;
