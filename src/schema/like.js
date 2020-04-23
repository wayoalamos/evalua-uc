const { gql } = require('apollo-server-express');

module.exports = gql`
    extend type Query {
        like(id: ID!): Like
        likes: [Like!]!
        likeComment(commentId: ID!): Boolean
    }
    extend type Mutation {
        executeLike(commentId: ID!, isLike: Boolean!): Like
    }
    type Like {
        id: ID!
        isLike: Boolean!
        comment: Comment!
        creator: User!
    }
`;
