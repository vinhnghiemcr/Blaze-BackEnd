'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('comments', [
      {
        content: 'Comment to test',
        postId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('comments', null, {})
  }
}
