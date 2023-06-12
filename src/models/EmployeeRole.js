'use strict';
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'EmployeeRole',
    {
      RoleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Roles',
          key: 'id',
        },
      },
      EmployeeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Employees',
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
      tableName: 'EmployeeRole',
      timestamps: true,
      indexes: [
        {
          name: 'sqlite_autoindex_EmployeeRole_1',
          unique: true,
          fields: [{ name: 'RoleId' }, { name: 'EmployeeId' }],
        },
      ],
    }
  );
};
