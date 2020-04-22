const { gql } = require('apollo-server-express');

module.exports = gql`
    extend type Mutation {
        createLike(isLike: Boolean!, commentId: ID!): Like
        deleteLike(id: ID!): Boolean!
        changeLike(id: ID!): Like!
    }
    type Like {
        id: ID!
        isLike: Boolean!
        comment: Comment!
        creator: User!
    }
`;
