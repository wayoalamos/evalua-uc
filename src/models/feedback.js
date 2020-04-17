const feedback = (sequelize, DataTypes) => {
  const Feedback = sequelize.define('feedback', {
    title: {
      type: DataTypes.STRING,
      validate: { notEmpty: true },
    },
    description: {
      type: DataTypes.TEXT,
      validate: { notEmpty: true },
    },
    status: {
      type: DataTypes.STRING,
      validate: { notEmpty: true },
    },
  });
  Feedback.associate = (models) => {
    Feedback.belongsTo(models.User);
  };
  return Feedback;
};

module.exports = feedback;
