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
        title: 'Visited the wildflowers with Ned',
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
        img: 'https://i.imgur.com/e05Fu1O.jpeg',
        trail_id: 3,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'First hike in Alabama!',
        content: 'I never knew Alabama had such nature!',
        img: 'https://i.pinimg.com/originals/ed/2b/2b/ed2b2bc5ff71e052c1b0bdc1819b95c7.jpg',
        trail_id: 4,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Green Ridge adventure near crestebutte',
        content: 'Hiked the Ridge today around Green Lake. Beautiful views!',
        img: 'https://explore-share.imgix.net/wp-content/uploads/2018/02/hiking_romania.jpg',
        trail_id: 5,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Waterfall on the way to green ridge',
        content:
          'You definitely need a four wheel vehicle to get here, but its worth the effort',
        img: 'https://i.imgur.com/6sjRNs1.jpeg',
        trail_id: 5,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Forgot my shoes but scenerie was beautiful',
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
      },
      {
        title: 'Catoctin Mountain Park',
        content:
          'Awesome site! Some of the best weather for hiking up this rugged trail',
        img: 'https://i.imgur.com/Ak0uCH2.jpeg',
        trail_id: 7,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Pillbox Hike',
        content: 'One of the best trails in Hawaii!',
        img: 'https://i.imgur.com/RSKq3GN.png',
        trail_id: 8,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Stairs to Heaven',
        content: 'Wonderful spot in Honolulu! Lots of stairs',
        img: 'https://i.imgur.com/DNsUTly.png',
        trail_id: 9,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Koko Crater Railway Trailhead',
        content: 'Very steep but fantasically historic!',
        img: 'https://i.imgur.com/bHgdryj.png',
        trail_id: 10,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Moanalua Valley Trail',
        content: 'One of the best spots to get get photographs in Honolulu',
        img: 'https://i.imgur.com/aFUnwL4.png',
        trail_id: 11,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Polallie Trailhead',
        content: 'What a waterfall!',
        img: 'https://i.imgur.com/LNGr3yq.png',
        trail_id: 12,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'BEAR ON TRAIL',
        content: 'Watch out spotted a bear on the trail today!',
        img: 'https://i.imgur.com/LybOIhO.png',
        trail_id: 5,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Fall Colors in Texas',
        content: 'One of the best spots to see leaves change colors!',
        img: 'https://i.imgur.com/f8MOPPk.jpeg',
        trail_id: 7,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Starry Night',
        content: "Don't forget to look up",
        img: 'https://i.imgur.com/Cd6ZvKF.png',
        trail_id: 2,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Take breaks when you need too!',
        content: "After a long hike it's good to stop and take a breather",
        img: 'https://i.imgur.com/1KaPEIA.png',
        trail_id: 11,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Does Cross Country Sking Count as Hiking?',
        content:
          'The girls were champs as we cross country skied our way up the trail',
        img: 'https://i.imgur.com/sdzXf28.png',
        trail_id: 17,
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
