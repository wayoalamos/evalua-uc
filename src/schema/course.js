const { gql } = require('apollo-server-express');

module.exports = gql`
    extend type Query {
        course(id: ID!): Course
        courses: [Course!]!
    }
    extend type Mutation {
        createCourse(name: String!, code: String!, description: String, category: String, credits: Int, school: String): Course!
        deleteCourse(id: ID!): Boolean!
    }
    type Course {
        id: ID!
        name: String!
        code: String!
        description: String
        category: String
        credits: Int
        school: String
        lessons: [Lesson!]!
    }
`;
