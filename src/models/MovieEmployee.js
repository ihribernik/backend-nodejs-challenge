'use strict';
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'MovieEmployee',
    {
      EmployeeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Employees',
          key: 'id',
        },
      },
      MovieId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Movies',
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
      tableName: 'MovieEmployee',
      timestamps: true,
      indexes: [
        {
          name: 'sqlite_autoindex_MovieEmployee_1',
          unique: true,
          fields: [{ name: 'EmployeeId' }, { name: 'MovieId' }],
        },
      ],
    }
  );
};
