'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('comments', [
      {
        content: 'Comment to test',
        postId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Comment to test',
        postId: 2,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Comment to test',
        postId: 3,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Comment to test',
        postId: 4,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      ,
      {
        content: 'Comment to test',
        postId: 5,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Comment to test',
        postId: 6,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Comment to test',
        postId: 7,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Comment to test',
        postId: 8,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Comment to test',
        postId: 9,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Comment to test',
        postId: 3,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('comments', null, {})
  }
}
