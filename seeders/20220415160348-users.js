'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        email: 'user1',
        name: 'Nghiem',
        trailName: 'Monkey King',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'user2',
        name: 'Jenna',
        trailName: 'Squirrel',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'user3',
        name: 'Molly',
        trailName: 'Tree',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
}
