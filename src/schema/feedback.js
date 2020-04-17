const { gql } = require('apollo-server-express');

module.exports = gql`
    extend type Query {
        feedback(id: ID!): Feedback
        feedbacks: [Feedback!]!
    }
    extend type Mutation {
        createFeedback(title: String!, description: String!): Feedback
        deleteFeedback(id: Int!): Boolean!
    }
    type Feedback {
        id: ID!
        creator: User!
        title: String!
        description: String!
        status: String!
    }
`;
