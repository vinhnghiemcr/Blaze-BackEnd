'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('posts', [
      {
        title: 'Climbed a 14ner!',
        content:
          'The wildflowers were blooming and the marmots were out as we traveled to the top of the mountian. ',
        img: 'https://i.imgur.com/KxHK2if.png',
        trail_id: 1,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Visited the Wildflowers with Ned',
        content:
          'Ned frolicked through wildflowers today as we got ready to make a big hike.',
        img: 'https://i.imgur.com/HcubU4T.jpeg',
        trail_id: 1,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Visted the Highest point in Texas',
        content: 'Wonderful views of Texas! One of my favorite hikes',
        img: 'https://cdn-assets.alltrails.com/uploads/photo/image/22426336/extra_large_f9986009d0f9e4a78c57ecfa4cb7b56f.jpg',
        trail_id: 2,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Mount Tammy!',
        content: 'Best Hike in New Jersey!',
        img: 'http://lifeasanomad.com/wp-content/gallery/mount-tammany/P1000355.jpg',
        trail_id: 3,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'First hike in Alabama!',
        content: 'I never new Alabama had such nature!',
        img: 'https://i.pinimg.com/originals/ed/2b/2b/ed2b2bc5ff71e052c1b0bdc1819b95c7.jpg',
        trail_id: 4,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Green Ridge Adventure near Crestebutte',
        content: 'Hiked the Ridge today around Green Lake. Beautiful views!',
        img: 'https://explore-share.imgix.net/wp-content/uploads/2018/02/hiking_romania.jpg',
        trail_id: 5,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Waterfall on the Way to Green Ridge',
        content:
          'You definitely need a four wheel vehicle to get here, but its worth the effort',
        img: 'https://i.imgur.com/6sjRNs1.jpeg',
        trail_id: 5,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Forgot my Shoes but Scenerie was beautiful',
        content:
          'Green Ridge hosts some of the best campsites around, would have gone for a hike if I had remembered my boots',
        img: 'https://i.imgur.com/908yOqx.png',
        trail_id: 5,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Stamping Mill',
        content:
          'Great Hike! The old stamping mill was wonderful and on your left you can watch ice climbers practice almost year round!',
        img: 'https://i.imgur.com/TJ9hQvS.jpeg',
        trail_id: 6,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('posts', null, {})
  }
}
