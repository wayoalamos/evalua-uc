const { gql } = require('apollo-server-express');

module.exports = gql`
    extend type Query {
        lesson(id: ID!): Lesson
        lessons: [Lesson!]!
    }
    extend type Mutation {
        createLesson(semesters: [Int!]!, campusId: ID!, courseId: ID!, profesorsId: [ID!]!): Lesson
        deleteLesson(id: ID!): Boolean!
    }
    type Lesson {
        id: ID!
        semesters: [Int!]!
        campus: Campus
        course: Course
        profesors: [Profesor!]
        comments: [Comment!]!
    }
`;
