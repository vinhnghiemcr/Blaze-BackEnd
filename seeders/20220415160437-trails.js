'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('trails', [
      {
        state_id: 6,
        user_id: 3,
        name: 'Handies Peak',
        img: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/handies-peak-wilderness-anthony-dezenzio.jpg',
        location: 'Hinsdale',
        longitude: -107.504491,
        latitude: 37.912982,
        difficulty: 'hard',
        length: 6.6,
        elevationChange: +14055,
        routeType: 'Hard route, 14ner!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state_id: 43,
        user_id: 1,
        name: 'Guadalupe Peak Texas Highpoint Trail',
        img: 'https://cdn-assets.alltrails.com/uploads/photo/image/22374415/extra_large_e972929f7fdc3c116b5512e4d9d0433b.jpg',
        location: 'national park location',
        longitude: -107.504491,
        latitude: 37.912982,
        difficulty: 'Moderate',
        length: 8.4,
        elevationChange: 2952,
        routeType: 'hard route',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state_id: 30,
        user_id: 2,
        name: 'Mount Tammany',
        img: 'https://cdn2.apstatic.com/photos/hike/7029055_medium_1554919813.jpg',
        location: 'Worthington State Forest',
        longitude: -75.106832906,
        latitude: 40.968162794,
        difficulty: 'Medium',
        length: 3.6,
        elevationChange: +1243,
        routeType: 'Moderate',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state_id: 1,
        user_id: 2,
        name: 'Sougahoagdee Falls',
        img: 'https://alabamawaterfalls.com/wp-content/uploads/2018/04/Sougahoagdee-Falls2.jpg',
        location: 'Southern Grace Kennels',
        longitude: -86.6214399,
        latitude: 32.6208638,
        difficulty: 'easy',
        length: 4,
        elevationChange: 4,
        routeType: 'Easy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state_id: 6,
        user_id: 3,
        name: 'Upper Green Lake Trail',
        img: 'https://i.imgur.com/FCEqWOs.jpg',
        location: 'Gunnison National Forest',
        longitude: -106.688089,
        latitude: 38.6874933,
        difficulty: 'Moderate',
        length: 7.8,
        elevationChange: +10970,
        routeType: 'Moderate',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state_id: 6,
        user_id: 3,
        name: 'Stamping Mill',
        img: 'https://www.americansouthwest.net/colorado/photographs700/farwell-stamp-mill-independence.jpg',
        location: 'Alma Colorado',
        longitude: -106.0618652,
        latitude: 39.2842882,
        difficulty: 'Moderate',
        length: 9,
        elevationChange: +13970,
        routeType: 'Rugged',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('trails', null, {})
  }
}
