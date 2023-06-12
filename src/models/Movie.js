'use strict';
const { Model, DataTypes } = require('sequelize');
module.exports = (sequelize, _DataTypes) => {
  class Movie extends Model {
    static associate(models) {
      // define association here
      models.Movie.belongsToMany(models.Employee, { through: 'MovieEmployee' });
    }
  }
  Movie.init(
    {
      title: DataTypes.STRING,
      releaseDate: DataTypes.DATE,
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
      modelName: 'Movie',
    }
  );
  return Movie;
};
