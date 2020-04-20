const feedback = (sequelize, DataTypes) => {
  const Feedback = sequelize.define('feedback', {
    title: {
      type: DataTypes.STRING,
      validate: { notEmpty: true },
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      validate: { notEmpty: true },
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
    },
  });
  Feedback.associate = (models) => {
    Feedback.belongsTo(models.User);
  };
  return Feedback;
};

module.exports = feedback;
