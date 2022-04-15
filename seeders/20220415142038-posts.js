'use strict'
const { User } = require('../models')
const { Trails } = require('../models')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert([
      {
        title: 'My Travel to a Park',
        content: 'Blah Blah Blah',
        img: 'Image',
        trailId: trail.id,
        userId: user.id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('posts', null, {})
  }
}
