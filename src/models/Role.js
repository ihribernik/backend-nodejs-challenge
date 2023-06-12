'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      models.Role.belongsToMany(models.Employee, { through: 'EmployeeRole' });
    }
  }
  Role.init(
    {
      title: {
        type: DataTypes.ENUM,
        values: ['actor', 'director'],
      },
      description: DataTypes.STRING,
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Role',
    }
  );
  return Role;
};
