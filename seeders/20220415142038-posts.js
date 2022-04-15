'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert([
      {
        title: 'My Travel to a Park',
        content: 'Blah Blah Blah',
        img: 'Image',
        trailId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('posts', null, {})
  }
}