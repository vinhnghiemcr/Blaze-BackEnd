'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('trails', [
      {
        stateId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER,
        name: 'Rocky Mountain national Park',
        img: 'Image',
        location: 'national park location',
        difficulty: 'hard',
        length: '2 miles',
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
