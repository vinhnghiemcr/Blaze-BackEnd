'use strict'
const middleware = require('../middleware')
module.exports = {
  async up(queryInterface, Sequelize) {
    const nghiem = await middleware.hashPassword('nghiem')
    const jenna = await middleware.hashPassword('jenna')
    const molly = await middleware.hashPassword('molly')
    const john = await middleware.hashPassword('john')
    const michael = await middleware.hashPassword('michael')
    const beyonce = await middleware.hashPassword('beyonce')
    const grandma = await middleware.hashPassword('grandma')
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
      },
      {
        email: 'john@john.com',
        name: 'John',
        trailName: 'Speed Racer',
        passwordDigest: john,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'michael@michael.com',
        name: 'micheal',
        trailName: 'Bear Necessities',
        passwordDigest: michael,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'beyonce@beyonce.com',
        name: 'beyonce',
        trailName: 'Beeyonce',
        passwordDigest: beyonce,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'grandma@grandma.com',
        name: 'Grandma',
        trailName: 'Grandma Gatewood',
        passwordDigest: grandma,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
}
