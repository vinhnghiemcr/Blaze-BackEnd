'use strict'
const { User } = require('../models')
const { Post } = require('../models')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('comments', [
      {
        content: 'Comment to test',
        postId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('comments', null, {})
  }
}
