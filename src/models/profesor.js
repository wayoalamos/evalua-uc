const profesor = (sequelize, DataTypes) => {
  const Profesor = sequelize.define('profesor', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: { notEmpty: true },
    },
    photo: {
      type: DataTypes.STRING,
    },
  });
  Profesor.associate = (models) => {
    Profesor.belongsToMany(models.Lesson, { through: 'lessonProfesors' });
  };
  return Profesor;
};

module.exports = profesor;
