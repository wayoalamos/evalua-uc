const comment = (sequelize, DataTypes) => {
  const Comment = sequelize.define('comment', {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: { notEmpty: true },
    },
  });
  Comment.associate = (models) => {
    Comment.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
    Comment.belongsTo(models.Lesson);
    Comment.hasMany(models.Like, { onDelete: 'CASCADE' });
  };
  return Comment;
};

module.exports = comment;
