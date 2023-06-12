'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    static associate(models) {
      models.Employee.belongsToMany(models.Movie, { through: 'MovieEmployee' });
      models.Employee.belongsToMany(models.TvShow, {
        through: 'TvShowEmployee',
      });
      models.Employee.belongsTo(models.Role, { through: 'EmployeeRole' });
    }
  }
  Employee.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      gender: DataTypes.STRING,
      birthdate: DataTypes.DATE,
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
      modelName: 'Employee',
    }
  );
  return Employee;
};
