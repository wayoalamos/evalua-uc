const { gql } = require('apollo-server-express');

module.exports = gql`
    extend type Query {
        users: [User!]
        user(id: ID!): User
        me: User
    }
    extend type Mutation {
        signUp(
            username: String!
            email: String!
            password: String!
        ): Token!
        signIn(
            login: String!
            password: String!
        ): Token!
        deleteUser(id: ID!): Boolean!
    }
    type Token {
        token: String!
    }
    type User {
        id: ID!
        username: String!
        projects: [Project!]!
        feedbacks: [Feedback!]!
        email: String!
        role: String
        banned: Boolean
        comments: [Comment!]!
        evaluations: [Evaluation!]!
    }
`;
