const { gql } = require('apollo-server-express');

module.exports = gql`
    extend type Query {
        comment(id: ID!): Comment
        comments: [Comment!]!
    }
    extend type Mutation {
        createComment(content: String!, lessonId: ID!): Comment!
        deleteComment(id: ID!): Boolean!
    }
    type Comment {
        id: ID!
        content: String!
        lesson: Lesson
        creator: User
        likes: [Like!]!
    }
`;
