'use strict'
const { User } = require('../models')
const { Trails } = require('../models')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('posts', [
      {
        title: 'My Travel to a Park',
        content: 'Blah Blah Blah',
        img: 'Image',
        trailId: 3,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('posts', null, {})
  }
}
