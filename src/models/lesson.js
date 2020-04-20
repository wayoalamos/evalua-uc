const lesson = (sequelize, DataTypes) => {
  const Lesson = sequelize.define('lesson', {
    semesters: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
  });
  return Lesson;
};

module.exports = lesson;
