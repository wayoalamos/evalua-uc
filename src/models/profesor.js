const profesor = (sequelize, DataTypes) => {
  const Profesor = sequelize.define('profesor', {
    name: {
      type: DataTypes.STRING,
      validate: { notEmpty: true },
    },
    photo: {
      type: DataTypes.STRING,
    },
  });
  return Profesor;
};

module.exports = profesor;
