'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Episode extends Model {
    static associate(models) {
      // define association here
      models.Episode.belongsTo(models.Season, { through: 'SeasonEpisode' });
    }
  }
  Episode.init(
    {
      title: DataTypes.STRING,
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
      modelName: 'Episode',
    }
  );
  return Episode;
};
