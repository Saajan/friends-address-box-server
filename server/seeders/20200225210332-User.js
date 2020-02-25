'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Users',
    [
      {
        name: 'Rachel Karen Green',
        age: 32,
        sex: "Female",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Monica Geller-Bing',
        age: 32,
        sex: "Female",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Phoebe Buffay-Hannigan',
        age: 33,
        sex: "Female",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Joseph Francis "Joey" Tribbiani Jr.',
        age: 34,
        sex: "Male",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Chandler Muriel Bing',
        age: 36,
        sex: "Male",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Dr. Ross Eustace Geller, Ph.D.',
        age: 36,
        sex: "Male",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Users", null, {})
};
