const bcrypt = require('bcrypt');

const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [7, 42],
      },
    },
    role: {
      type: DataTypes.STRING,
    },
  });
  User.associate = (models) => {
    User.hasMany(models.Project, { onDelete: 'CASCADE' });
  };
  User.beforeCreate(async (newUser) => {
    // eslint-disable-next-line no-param-reassign
    newUser.password = await newUser.generatePasswordHash();
  });
  User.prototype.generatePasswordHash = async function bcryptPassword() {
    const saltRounds = 10;
    return bcrypt.hash(this.password, saltRounds);
  };
  User.prototype.validatePassword = async function validatePassword(password) {
    return bcrypt.compare(password, this.password);
  };


  return User;
};

module.exports = user;
