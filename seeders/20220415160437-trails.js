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
        longitude: -99.683617,
        latitude: 31.169621,
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
        user_id: 1,
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
        longitude: -106.987473,
        latitude: 38.869763,
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
      },
      {
        state_id: 43,
        user_id: 1,
        name: 'The Window Trail',
        img: 'https://cdn-assets.alltrails.com/uploads/photo/image/22432726/extra_large_cee78e5b0f891ff5f286a637dd6476e5.jpg',
        location: 'Terlingua, Texas',
        longitude: -97.722597,
        latitude: 30.717176,
        difficulty: 'Moderate',
        length: 5.3,
        elevationChange: +4970,
        routeType: 'Rugged',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state_id: 11,
        user_id: 1,
        name: 'Pillbox Hike',
        img: 'https://i.imgur.com/RSKq3GN.png',
        location: 'Honolulu',
        longitude: -157.858093,
        latitude: 21.315603,
        difficulty: 'Moderate',
        length: 2.3,
        elevationChange: +170,
        routeType: 'Leafy Trail, paths may vary',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state_id: 11,
        user_id: 1,
        name: 'Stairs to Heaven',
        img: 'https://i.imgur.com/DNsUTly.png',
        location: 'Honolulu, Hawaii',
        longitude: -157.858093,
        latitude: 21.315603,
        difficulty: 'Moderate',
        length: 7.3,
        elevationChange: +270,
        routeType: 'Lovely stairs, but too many stairs.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state_id: 11,
        user_id: 1,
        name: 'Koko Crater Railway Trailhead',
        img: 'https://i.imgur.com/bHgdryj.png',
        location: 'Honolulu, Hawaii',
        longitude: -157.858093,
        latitude: 21.315603,
        difficulty: 'Hard',
        length: 5.5,
        elevationChange: +70,
        routeType: 'Lots of tracks, really interesting to learn the history.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state_id: 11,
        user_id: 1,
        name: 'Moanalua Valley Trail',
        img: 'https://i.imgur.com/aFUnwL4.png',
        location: 'Honolulu, Hawaii',
        longitude: -157.858093,
        latitude: 21.315603,
        difficulty: 'Easy',
        length: 6.8,
        elevationChange: +1170,
        routeType: 'Great spot for photographs, and some of the best weather',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state_id: 37,
        user_id: 1,
        name: 'Oregon Trail',
        img: 'https://i.imgur.com/LNGr3yq.png',
        location: 'Saddle Mountain',
        longitude: -122.6068,
        latitude: 45.3573,
        difficulty: 'Moderate',
        length: 2.3,
        elevationChange: +970,
        routeType: 'Wonderful blackberries along the trail',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state_id: 5,
        user_id: 2,
        name: 'Bump and Grind Trail',
        img: 'https://cdn-assets.alltrails.com/uploads/photo/image/23839216/extra_large_387a1f5bb2806680cfd67eb91e2800c3.jpg',
        location: 'Palm Desert',
        longitude: -120.047533,
        latitude: 37.229564,
        difficulty: 'Easy',
        length: 2.3,
        elevationChange: +970,
        routeType: 'Dusty trail but lovely spot to see the sunrise',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state_id: 6,
        user_id: 2,
        name: 'Gunnison National Forest',
        img: 'https://i.imgur.com/4Qjg5wC.jpeg',
        location: 'Black Canyon of the Gunnison',
        longitude: -106.987473,
        latitude: 38.869763,
        difficulty: 'Difficult',
        length: 2.3,
        elevationChange: +970,
        routeType: 'Challenging',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state_id: 2,
        user_id: 3,
        name: 'Alaska?',
        img: 'https://i.imgur.com/bKumchp.png',
        location: 'This is actually in Colorado',
        longitude: -106.987473,
        latitude: 38.869763,
        difficulty: 'Easy',
        length: 6,
        elevationChange: +11970,
        routeType: 'Lushious green vallys filled with sunshine and daisies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state_id: 6,
        user_id: 2,
        name: 'River Trail',
        img: 'https://i.imgur.com/0mLQMK3.png',
        location: 'Beautiful spot to camp and prepare for a long hike',
        longitude: -106.987473,
        latitude: 38.869763,
        difficulty: 'Easy',
        length: 5.3,
        elevationChange: +13070,
        routeType: 'Lushious green vallys filled with sunshine and daisies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state_id: 6,
        user_id: 3,
        name: 'Handies Peak during the Winter',
        img: 'https://i.imgur.com/BWV7lxP.jpeg',
        location: 'Hinsdale',
        longitude: -107.504491,
        latitude: 37.912982,
        difficulty: 'hard',
        length: 6.6,
        elevationChange: +11055,
        routeType: 'Beauitful',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state_id: 6,
        user_id: 3,
        name: 'Grand Mesa',
        img: 'https://i.imgur.com/W093RSo.jpeg',
        location: 'Mesa County',
        longitude: -108.509096,
        latitude: 39.09522,
        difficulty: 'hard',
        length: 6.6,
        elevationChange: +11055,
        routeType: 'Beauitful',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state_id: 9,
        user_id: 4,
        name: 'Grand Mesa',
        img: 'https://www.visittallahassee.com/media/uploads/hiker.jpg',
        location: 'Tallahassee',
        longitude: -84.2807329,
        latitude: 30.4382559,
        difficulty: 'Easy',
        length: 4.6,
        elevationChange: +55,
        routeType: 'Paved',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state_id: 43,
        user_id: 5,
        name: 'West Cave Preserve',
        img: 'https://img-aws.ehowcdn.com/700x/cdn.onlyinyourstate.com/wp-content/uploads/2018/08/4498371019_b82e7d9735_b-700x560.jpg',
        location: 'Round Mountain',
        longitude: -99.683617,
        latitude: 31.169621,
        difficulty: 'Moderate',
        length: 1.6,
        elevationChange: +145,
        routeType: 'Rugged',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state_id: 5,
        user_id: 6,
        name: 'Love Drought',
        img: 'https://www.goodfreephotos.com/albums/united-states/california/yosemite-national-park/landscape-of-the-valley-at-yosemite-national-park-california.jpg',
        location: 'Yosimite',
        longitude: -120.047533,
        latitude: 37.229564,
        difficulty: 'Moderate',
        length: 1.6,
        elevationChange: +145,
        routeType: 'Rugged',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state_id: 2,
        user_id: 1,
        name: 'Centennial Trail',
        img: 'https://cdn.onlyinyourstate.com/wp-content/uploads/2018/03/9443800442_3cf5627b25_k.jpg',
        location: 'Soldtana',
        longitude: -151.07396035,
        latitude: 60.46647644,
        difficulty: 'Moderate',
        length: 2,
        elevationChange: +205,
        routeType: 'Rugged',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state_id: 2,
        user_id: 1,
        name: 'Chillkoot Trail',
        img: 'https://www.10a-tours.com/wp-content/uploads/2020/06/Ruby-Range-Adventure-Canada-Chilkoot-Trail-17-Upper-valley-on-the-Chilkoot-Trail-Alaska-and-Yukon.jpg',
        location: 'Alaska Valley',
        longitude: -151.07396035,
        latitude: 60.46647644,
        difficulty: 'Moderate',
        length: 2,
        elevationChange: +205,
        routeType: 'Rugged',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state_id: 2,
        user_id: 1,
        name: 'Goldcreek Flume Trail',
        img: 'https://images.rove.me/w_1920,q_85/dcasqq41xpm9r8lkzyxf/alaska-chilkoot-trail-hiking.jpg',
        location: 'Alaska Valley',
        longitude: -151.07396035,
        latitude: 60.46647644,
        difficulty: 'Moderate',
        length: 12,
        elevationChange: +205,
        routeType: 'Rugged',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state_id: 6,
        user_id: 4,
        name: 'Maroon Bells',
        img: 'https://img1.10bestmedia.com/Images/Photos/351900/Aspen-Maroon-Bells_54_990x660.jpg',
        location: 'Aspen',
        longitude: -106.988937,
        latitude: 39.070663,
        difficulty: 'Difficult',
        length: 22,
        elevationChange: +12205,
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
