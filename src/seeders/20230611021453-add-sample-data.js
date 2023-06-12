'use strict';
const {
  Episode,
  Role,
  Season,
  TvShow,
  Employee,
  EmployeeRole,
  MovieEmployee,
  SeasonEpisode,
  TvShowEmployee,
  TvShowSeason,
} = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const episodes = [
      { title: 'Rites of Passage', description: 'Rites of Passage' },
      {
        title: 'Wrath of the Northmen',
        description: 'Wrath of the Northmen',
      },
      { title: 'Dispossessed', description: 'Dispossessed' },
      { title: 'Trial', description: 'Trial' },
      { title: 'Raid', description: 'Raid' },
      {
        title: 'Burial of the Dead',
        description: 'Burial of the Dead',
      },
      { title: 'A Kings Ransom', description: 'A Kings Ransom' },
      { title: 'Sacrifice', description: 'Sacrifice' },
      { title: 'All Change', description: 'All Change' },
    ];
    const seasons = [
      {
        title: 'Season 1',
        description: 'Season',
        year: '2013',
      },
    ];

    const tvShows = [
      {
        title: 'Vikings',
        description:
          'Vikings es una serie de televisión de drama histórico creada y escrita por Michael Hirst para el canal History. Filmada en Irlanda, se estrenó el 3 de marzo de 2013 y concluyó el 30 de diciembre de 2020 tras seis temporadas y un total de 89 episodios. ',
        duration: 89,
      },
    ];
    const rolesDefault = [
      {
        title: 'actor',
        description: 'actor of movies and series',
      },
      {
        title: 'director',
        description: 'director of movies and series',
      },
    ];

    const employees = [
      {
        firstName: 'pepe',
        lastName: 'grillo',
        gender: 'grillo',
        birthdate: new Date(),
      },
    ];

    const employeesIds = await queryInterface
      .bulkInsert(Employee.tableName, employees, { returning: true })
      .then((ids) => {
        return Array.from({ length: ids }, (_, i) => i + 1);
      });

    const episodesIds = await queryInterface
      .bulkInsert(Episode.tableName, episodes, { returning: true })
      .then((ids) => {
        return Array.from({ length: ids }, (_, i) => i + 1);
      });

    const seasonsIds = await queryInterface
      .bulkInsert(Season.tableName, seasons, { returning: true })
      .then((ids) => {
        return Array.from({ length: ids }, (_, i) => i + 1);
      });

    const tvShowIds = await queryInterface
      .bulkInsert(TvShow.tableName, tvShows, { returning: true })
      .then((ids) => {
        return Array.from({ length: ids }, (_, i) => i + 1);
      });

    const roleIds = await queryInterface
      .bulkInsert(Role.tableName, rolesDefault)
      .then((ids) => {
        return Array.from({ length: ids }, (_, i) => i + 1);
      });

    const seasonEpisodes = episodesIds.map((episode) => ({
      EpisodeId: episode,
      SeasonId: seasonsIds[0],
    }));

    const tvShowSeasons = seasonsIds.map((season) => ({
      TvShowId: tvShowIds[0],
      SeasonId: season,
    }));

    const tvShowEmployees = employeesIds.map((employee) => ({
      EmployeeId: employee,
      TvShowId: tvShowIds[0],
    }));

    const employeeRole = employeesIds.map((employee) => ({
      EmployeeId: employee,
      RoleId: roleIds[0],
    }));

    await queryInterface.bulkInsert(EmployeeRole.tableName, employeeRole);
    await queryInterface.bulkInsert(TvShowSeason.tableName, tvShowSeasons);
    await queryInterface.bulkInsert(SeasonEpisode.tableName, seasonEpisodes);
    await queryInterface.bulkInsert(TvShowEmployee.tableName, tvShowEmployees);
  },

  async down(queryInterface, Sequelize) {},
};
