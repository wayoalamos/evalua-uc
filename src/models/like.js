const like = (sequelize, DataTypes) => {
  const Like = sequelize.define('like', {
    isLike: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });
  Like.associate = (models) => {
    Like.belongsTo(models.Comment, {
      foreignKey: {
        allowNull: false,
        primaryKey: true,
      },
    });
    Like.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
        primaryKey: true,
      },
    });
  };
  Like.removeAttribute('id');
  return Like;
};

module.exports = like;
