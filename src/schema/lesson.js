const { gql } = require('apollo-server-express');

module.exports = gql`
    extend type Query {
        lesson(id: ID!): Lesson
        lessons: [Lesson!]!
    }
    extend type Mutation {
        createLesson(semesters: [Int!]!, campusId: Int!): Lesson
        deleteLesson(id: Int!): Boolean!
    }
    type Lesson {
        id: ID!
        semesters: [Int!]!
        campus: Campus!
        course: Course!
    }
`;
