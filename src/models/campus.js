const campus = (sequelize, DataTypes) => {
  const Campus = sequelize.define('campus', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: { notEmpty: true },
    },
  });
  return Campus;
};

module.exports = campus;
