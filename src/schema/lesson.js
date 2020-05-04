const { gql } = require('apollo-server-express');

module.exports = gql`
    extend type Query {
        lesson(id: ID!): Lesson
        lessons: [Lesson!]!
        sortLessons: [Lesson!]
    }
    extend type Mutation {
        createLesson(semesters: [Int!]!, campusId: ID!, courseId: ID!, profesorsIds: [ID!]!): Lesson
        deleteLesson(id: ID!): Boolean!
    }
    type Lesson {
        id: ID!
        semesters: [Int!]!
        campus: Campus
        course: Course
        profesors: [Profesor!]
        comments: [Comment!]!
        evaluations: [Evaluation!]!
        stars1Avg: Float
    }
`;
