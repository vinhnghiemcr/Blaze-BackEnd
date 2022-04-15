'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('trails', [
      {
        state_id: 1,
        user_id: 1,
        name: 'Rocky Mountain national Park',
        img: 'Image',
        location: 'national park location',
        difficulty: 'hard',
        length: 6.6,
        elevationChange: 4,
        routeType: 'hard route',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state_id: 1,
        user_id: 2,
        name: 'national Park',
        img: 'Image',
        location: 'national park location',
        difficulty: 'hard',
        length: 5.6,
        elevationChange: 4,
        routeType: 'hard route',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state_id: 2,
        user_id: 3,
        name: 'Park',
        img: 'Image',
        location: 'national park location',
        difficulty: 'hard',
        length: 2.3,
        elevationChange: 4,
        routeType: 'hard route',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state_id: 2,
        user_id: 2,
        name: 'Park to go on trail',
        img: 'Image',
        location: 'national park location',
        difficulty: 'easy',
        length: 1.2,
        elevationChange: 4,
        routeType: 'hard route',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('trails', null, {})
  }
}
