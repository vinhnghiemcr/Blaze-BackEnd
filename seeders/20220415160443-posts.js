'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('posts', [
      {
        title: 'My Travel to a Park',
        content: 'Blah Blah Blah',
        img: 'https://media.beam.usnews.com/22/f2/4609fa4747298709af9f1269bbd6/150710-hiking-stock.jpg',
        trail_id: 1,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'My Travel to a Park today',
        content: 'Blah Blah',
        img: 'https://appalachiantrail.org/wp-content/uploads/2020/01/ATC_RP14251_DSC_5582-lpr.jpg',
        trail_id: 1,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Adventure',
        content: 'Blah Blah Blah Blah',
        img: 'https://explore-share.imgix.net/wp-content/uploads/2018/02/hiking_romania.jpg',
        trail_id: 2,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'My Travel to a Park',
        content: 'Blah Blah Blah',
        img: 'https://media.beam.usnews.com/22/f2/4609fa4747298709af9f1269bbd6/150710-hiking-stock.jpg',
        trail_id: 2,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'My Travel to a Park today',
        content: 'Blah Blah',
        img: 'https://appalachiantrail.org/wp-content/uploads/2020/01/ATC_RP14251_DSC_5582-lpr.jpg',
        trail_id: 3,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Adventure',
        content: 'Blah Blah Blah Blah',
        img: 'https://explore-share.imgix.net/wp-content/uploads/2018/02/hiking_romania.jpg',
        trail_id: 3,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'My Travel to a Park',
        content: 'Blah Blah Blah',
        img: 'https://media.beam.usnews.com/22/f2/4609fa4747298709af9f1269bbd6/150710-hiking-stock.jpg',
        trail_id: 4,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'My Travel to a Park today',
        content: 'Blah Blah',
        img: 'https://appalachiantrail.org/wp-content/uploads/2020/01/ATC_RP14251_DSC_5582-lpr.jpg',
        trail_id: 4,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('posts', null, {})
  }
}
