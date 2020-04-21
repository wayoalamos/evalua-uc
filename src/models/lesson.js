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
    Lesson.belongsToMany(models.Profesor, { through: 'lessonProfesors' });
  };
  return Lesson;
};

module.exports = lesson;
