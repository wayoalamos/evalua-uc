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
  return Profesor;
};

module.exports = profesor;
