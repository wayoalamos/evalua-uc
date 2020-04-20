const course = (sequelize, DataTypes) => {
  const Course = sequelize.define('course', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: { notEmpty: true },
    },
    code: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: { notEmpty: true },
    },
    description: {
      type: DataTypes.TEXT,
    },
    category: {
      type: DataTypes.STRING,
    },
    credits: {
      type: DataTypes.INTEGER,
    },
    school: {
      type: DataTypes.STRING,
    },
  });
  return Course;
};

module.exports = course;
