// const users = {
//   1: {
//     id: 1,
//     username: 'Robin Wieruch',
//   },
//   2: {
//     id: 2,
//     username: 'Dave Davids',
//   },
// };

// const projects = {
//   1: {
//     id: 1,
//     created: 'a',
//     title: 'project uno',
//     description: 'descripcion 1',
//     creator_id: 1,
//   },
//   2: {
//     id: 2,
//     created: 'assa',
//     title: 'project dos',
//     description: 'descripcion 12',
//     creator_id: 2,
//   },
// };
require('dotenv').config();
const Sequelize = require('sequelize');

// host: process.env.POSTGRES_HOST,
// port: process.env.POSTGRES_PORT,
// database: process.env.POSTGRES_DB,
// user: process.env.POSTGRES_USER,
// password: process.env.POSTGRES_PASSWORD,

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
};

Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

module.exports = { models, sequelize };
