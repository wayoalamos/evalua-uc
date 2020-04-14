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
  });
  User.associate = (models) => {
    User.hasMany(models.Project, { onDelete: 'CASCADE' });
  };
  User.findByLogin = async (login) => {
    let userLogged = await User.findOne({
      where: { username: login },
    });
    if (!userLogged) {
      userLogged = await User.findOne({
        where: { email: login },
      });
    }
    return userLogged;
  };

  return User;
};

module.exports = user;
