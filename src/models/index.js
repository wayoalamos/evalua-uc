require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    dialect: 'postgres',
  },
);
const models = {
  User: sequelize.import('./user'),
  Project: sequelize.import('./project'),
  Feedback: sequelize.import('./feedback'),
  Campus: sequelize.import('./campus'),
  Profesor: sequelize.import('./profesor'),
  Course: sequelize.import('./course'),
  Lesson: sequelize.import('./lesson'),
  Comment: sequelize.import('./comment'),
  Like: sequelize.import('./like'),
  Evaluation: sequelize.import('./evaluation'),
};

Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

module.exports = { models, sequelize };
