const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
    },
  });
  User.associate = (models) => {
    User.hasMany(models.Project, { onDelete: 'CASCADE' });
  };
  return User;
};
module.exports = user;
