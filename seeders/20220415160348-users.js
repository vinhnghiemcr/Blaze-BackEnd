'use strict'
const middleware = require('../middleware')
module.exports = {
  async up(queryInterface, Sequelize) {
    const nghiem = await middleware.hashPassword('nghiem')
    const jenna = await middleware.hashPassword('jenna')
    const molly = await middleware.hashPassword('molly')
    await queryInterface.bulkInsert('users', [
      {
        email: 'nghiem@nghiem.com',
        name: 'Nghiem',
        trailName: 'Monkey King',
        passwordDigest: nghiem,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'jenna@jenna.com',
        name: 'Jenna',
        trailName: 'Squirrel',
        passwordDigest: jenna,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'molly@molly.com',
        name: 'Molly',
        trailName: 'Crunchy Granola',
        passwordDigest: molly,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
}
