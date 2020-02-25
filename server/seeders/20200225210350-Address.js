'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Addresses',
    [
      {
        userId: 1,
        address: "address Rachel",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        address: "address Monica",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        address: "address Monica",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        address: "address Phoebe",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        address: "address Phoebe",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        address: "address Joey",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        address: "address Chandler",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        address: "address Chandler",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 6,
        address: "address Ross",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 6,
        address: "address Ross",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 6,
        address: "address Ross",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Addresses", null, {})
};
