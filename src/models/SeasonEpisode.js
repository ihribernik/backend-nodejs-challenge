'use strict';
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'SeasonEpisode',
    {
      SeasonId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Seasons',
          key: 'id',
        },
      },
      EpisodeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Episodes',
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
      tableName: 'SeasonEpisode',
      timestamps: true,
      indexes: [
        {
          name: 'sqlite_autoindex_SeasonEpisode_1',
          unique: true,
          fields: [{ name: 'SeasonId' }, { name: 'EpisodeId' }],
        },
      ],
    }
  );
};
