'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('states', [
      {
        name: 'Idaho',
        img: 'https://www.cropsvegetables.com/cache/subproducts/29/thumb/1500_800_POTATO.jpg',
        description: 'Blah blah',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kansas',
        img: 'https://www.mylongdistancemovers.com/wp-content/uploads/2022/03/Moving-To-Kansas-768x512.jpg',
        description: 'Kansas',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('states', null, {})
  }
}
