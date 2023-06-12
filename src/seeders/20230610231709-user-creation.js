'use strict';
const { User } = require('../models');
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const { count } = await User.findAndCountAll();
    if (count === 0) {
      await queryInterface.bulkInsert(User.tableName, [
        {
          firstName: 'claudio ivan',
          lastName: 'hribernik',
          email: 'cihribernik@gmail.com',
          password: bcrypt.hashSync('algo124', 12),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(User, null, {});
  },
};
