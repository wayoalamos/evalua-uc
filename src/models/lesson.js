const lesson = (sequelize, DataTypes) => {
  const Lesson = sequelize.define('lesson', {
    semesters: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
  });
  Lesson.associate = (models) => {
    Lesson.belongsTo(models.Campus, {
      foreignKey: {
        allowNull: false,
      },
    });
    Lesson.belongsTo(models.Course, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Lesson;
};

module.exports = lesson;
