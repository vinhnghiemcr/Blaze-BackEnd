'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert('user_followers', [
      {
        user_id: 1,
        follower_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        follower_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        follower_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        follower_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 3,
        follower_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 3,
        follower_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        follower_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        follower_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 3,
        follower_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        follower_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 4,
        follower_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 5,
        follower_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 6,
        follower_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 3,
        follower_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user_followers', null, {})
  }
}
