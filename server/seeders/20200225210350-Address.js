'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Addresses',
    [
      {
        userId: 1,
        address: "#121, Friends Apartment, New York.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        address: "#121, Friends Apartment, New York.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        address: "#121, Coffee House, New York.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        address: "#121, Coffee House, New York.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        address: "#121, Friends Apartment, New York.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        address: "#121, Coffee House, New York.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 6,
        address: "#121, Coffee House, New York.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 6,
        address: "#121, Friends Apartment, New York.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 6,
        address: "#121, Paleontology Department, New York.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Addresses", null, {})
};
