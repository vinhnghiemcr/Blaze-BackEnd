'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('comments', [
      {
        content: 'Comment to test',
        post_id: 1,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Comment to test',
        post_id: 2,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Comment to test',
        post_id: 3,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Comment to test',
        post_id: 4,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Comment to test',
        post_id: 5,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Comment to test',
        post_id: 6,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Comment to test',
        post_id: 7,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Comment to test',
        post_id: 8,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Comment to test',
        post_id: 9,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Comment to test',
        post_id: 3,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('comments', null, {})
  }
}
