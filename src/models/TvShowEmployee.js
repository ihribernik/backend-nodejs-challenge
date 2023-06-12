'use strict';
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'TvShowEmployee',
    {
      EmployeeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Employees',
          key: 'id',
        },
      },
      TvShowId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'TvShows',
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
      tableName: 'TvShowEmployee',
      timestamps: true,
      indexes: [
        {
          name: 'sqlite_autoindex_TvShowEmployee_1',
          unique: true,
          fields: [{ name: 'EmployeeId' }, { name: 'TvShowId' }],
        },
      ],
    }
  );
};
