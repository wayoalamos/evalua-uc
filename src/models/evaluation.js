const evaluation = (sequelize, DataTypes) => {
  const Evaluation = sequelize.define('evaluation', {
    stars: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 10,
      },
    },
  });
  Evaluation.associate = (models) => {
    Evaluation.belongsTo(models.Lesson, {
      foreignKey: {
        allowNull: false,
      },
    });
    Evaluation.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
    Evaluation.belongsTo(models.Charasteristic, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Evaluation;
};

module.exports = evaluation;
