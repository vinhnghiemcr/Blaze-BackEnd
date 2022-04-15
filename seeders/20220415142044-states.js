'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('states', [
      {
        name: 'Idaho',
        img: 'Image',
        description: 'Blah blah',
        longitude: 188181,
        latitude: 17171
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('states', null, {})
  }
}
