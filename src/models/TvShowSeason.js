'use strict';
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'TvShowSeason',
    {
      TvShowId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'TvShows',
          key: 'id',
        },
      },
      SeasonId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Seasons',
          key: 'id',
        },
      },
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
      tableName: 'TvShowSeason',
      timestamps: true,
      indexes: [
        {
          name: 'sqlite_autoindex_TvShowSeason_1',
          unique: true,
          fields: [{ name: 'TvShowId' }, { name: 'SeasonId' }],
        },
      ],
    }
  );
};
