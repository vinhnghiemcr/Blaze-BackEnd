'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('comments', [
      {
        content: 'Ned has such a big head!',
        post_id: 2,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'What beautiful flowers',
        post_id: 2,
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'I want to visit!',
        post_id: 7,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'I cant imagine a prettier place in the world!',
        post_id: 7,
        user_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Cmon man, how did you forget your shoes?',
        post_id: 8,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'I am going to bring my grandma here!',
        post_id: 7,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Wow! I cant wait to visit',
        post_id: 4,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Wow! This is going on my bucket list',
        post_id: 4,
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'How many leaves are on those trees?',
        post_id: 15,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'I promise not to forget my shoes if I go here',
        post_id: 10,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'What a great picture!',
        post_id: 14,
        user_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'That looks hard, at least you didnt forget your shoes',
        post_id: 1,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'I would love to visit one day! Adding it to my list',
        post_id: 15,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Wow! Sometimes I forget how many stars are up in the sky',
        post_id: 16,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Fantastic!',
        post_id: 6,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'What a find!',
        post_id: 5,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Do you need any special equipment for the trail?',
        post_id: 1,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Noice!',
        post_id: 4,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Noice NOICE Noice!',
        post_id: 4,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Noooiiccce!',
        post_id: 4,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'super Noice!!',
        post_id: 4,
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'super dupper Noice!!',
        post_id: 4,
        user_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Stellar trail!',
        post_id: 12,
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Stellar! Its fabulous',
        post_id: 12,
        user_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'OH WOWZA what a place',
        post_id: 13,
        user_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Truly beautiful',
        post_id: 13,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'What kind of dirt is there?',
        post_id: 13,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Can you inform me on the pHD of the soil?',
        post_id: 15,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('comments', null, {})
  }
}
