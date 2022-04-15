'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert('userFollower', [
      {
        userId: DataTypes.STRING,
        followerId: DataTypes.STRING,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('userFollowers', null, {})
  }
}
