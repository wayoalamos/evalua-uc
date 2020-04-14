const project = (sequelize, DataTypes) => {
  const Project = sequelize.define('project', {
    title: {
      type: DataTypes.STRING,
      validate: { notEmpty: true },
    },
    description: {
      type: DataTypes.STRING,
    },
  });
  Project.associate = (models) => {
    Project.belongsTo(models.User);
  };
  return Project;
};

module.exports = project;
