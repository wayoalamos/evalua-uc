const campus = (sequelize, DataTypes) => {
  const Campus = sequelize.define('campus', {
    name: {
      type: DataTypes.STRING,
      validate: { notEmpty: true },
    },
  });
  return Campus;
};

module.exports = campus;
