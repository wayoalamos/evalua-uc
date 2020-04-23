const campus = (sequelize, DataTypes) => {
  const Campus = sequelize.define('campus', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: { notEmpty: true },
    },
  });
  Campus.associate = (models) => {
    Campus.hasMany(models.Lesson, { onDelete: 'CASCADE' });
  };
  return Campus;
};

module.exports = campus;
