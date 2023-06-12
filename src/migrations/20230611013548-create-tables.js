'use strict';
const {
  Employee,
  EmployeeRole,
  Episode,
  Movie,
  MovieEmployee,
  Role,
  Season,
  SeasonEpisode,
  TvShow,
  TvShowEmployee,
  TvShowSeason,
  User,
} = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(Role.tableName, Role.tableAttributes);
    await queryInterface.createTable(
      Employee.tableName,
      Employee.tableAttributes
    );

    await queryInterface.createTable(TvShow.tableName, TvShow.tableAttributes);
    await queryInterface.createTable(Season.tableName, Season.tableAttributes);
    await queryInterface.createTable(
      Episode.tableName,
      Episode.tableAttributes
    );
    await queryInterface.createTable(Movie.tableName, Movie.tableAttributes);
    await queryInterface.createTable(User.tableName, User.tableAttributes);

    await queryInterface.createTable(
      EmployeeRole.tableName,
      EmployeeRole.tableAttributes
    );
    await queryInterface.createTable(
      MovieEmployee.tableName,
      MovieEmployee.tableAttributes
    );
    await queryInterface.createTable(
      SeasonEpisode.tableName,
      SeasonEpisode.tableAttributes
    );
    await queryInterface.createTable(
      TvShowEmployee.tableName,
      TvShowEmployee.tableAttributes
    );
    await queryInterface.createTable(
      TvShowSeason.tableName,
      TvShowSeason.tableAttributes
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(Employee.tableName);
    await queryInterface.dropTable(Episode.tableName);
    await queryInterface.dropTable(Movie.tableName);
    await queryInterface.dropTable(Role.tableName);
    await queryInterface.dropTable(Season.tableName);
    await queryInterface.dropTable(TvShow.tableName);
    await queryInterface.dropTable(User.tableName);
  },
};
