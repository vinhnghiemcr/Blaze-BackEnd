'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('states', [
      {
        name: 'Alabama',
        img: 'https://cdn.onlyinyourstate.com/wp-content/uploads/2016/01/8086192342_a0354223e3_o.jpg',
        description:
          'Alabama is known for peanuts, southern hospitality, the beautiful gulf coast beaches, and college football.',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Alaska',
        img: 'https://cdn.wallpapersafari.com/31/47/Fi9plW.jpeg',
        description:
          'Alaska is unique within the National Park Service. Parks in Alaska make up over half (60%) of all the land within the National Park System.',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Arizona',
        img: 'https://files.tripstodiscover.com/files/2017/03/9406907186_7f69b1b86c_o-1.jpg',
        description:
          'Its not a secret that Arizona has an abundance of diverse landscapes that are bursting with natural beauty.',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Arkansas',
        img: 'http://assets.inarkansas.com/40644/twin-falls.jpg',
        description:
          "Whether you're looking for magnificent architecture, caverns, sites of literary interest, art galleries, or nature, there is plenty to fascinate you in the state",
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'California',
        img: 'https://live.staticflickr.com/4596/39413696681_1051ded5c4_h.jpg',
        description:
          'There is probably no natural wonder more famous in California than Half Dome. This iconic rock in Yosemite National Park is something you could see a thousand times, and it never is less awe-inspiring.',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Colorado',
        img: 'https://cdn-assets.alltrails.com/uploads/photo/image/23791541/extra_large_c8c7d725b73e0b1f5d9185f1d7f4cdd5.jpg',
        description:
          "You'll find many places to enjoy Colorado's vast natural beauty. There are four national parks, eight national monuments, 42 state parks and many other natural attractions waiting to be explored.",
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Connecticut',
        img: 'https://assets.rbl.ms/14626622/980x.jpg',
        description:
          'When it comes to nature, Connecticut is probably best known for its beautiful but modest rolling green hills, meandering streams and lovely shoreline.',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Delaware',
        img: 'https://www.lebonguide.com/bundles/website/images/category/large/nature.jpg',
        description: '"You can observe a lot by watching" - Yogi Berra',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Florida',
        img: 'https://cdn.theculturetrip.com/wp-content/uploads/2020/04/rrpgh2-1024x669.jpg',
        description:
          'Its 46,000 acres of creeks, rivers, marsh, wetlands and islands exceed New Yorks great park by more than five times.',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Georgia',
        img: 'https://i0.wp.com/files.tripstodiscover.com/files/2017/09/Providence-Canyon-State-Park.jpg?resize=784%2c523',
        description:
          'This state is full of surprises - from mountains to beaches, marshes, canyons, forests, and even islands. Spring and fall are wonderful times to visit Georgia because the temperatures are pleasant and the humidity isnt too high.',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hawaii',
        img: 'https://www.literallyeverywhere.com/wp-content/uploads/2018/08/hawaii-1024x683.jpg',
        description:
          'Hawaii is home to the only tropical rainforest in the United States. There are approximately 48 different native Hawaiian forests with more than 175 species of trees inhabiting them.',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Idaho',
        img: 'https://i.redd.it/g0eq4pt25dn31.jpg',
        description:
          'Idaho is home to some of the most beautiful waterfalls in the country. The Upper and Lower Mesa Falls are no exception. ',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Illinois',
        img: 'https://www.mylongdistancemovers.com/wp-content/uploads/2022/03/Moving-To-Kansas-768x512.jpg',
        description:
          'The waters at Spunky Bottoms begin to sing with the arrival of warmer nights and spring peeper frogs.',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Indiana',
        img: 'https://www.mylongdistancemovers.com/wp-content/uploads/2022/03/Moving-To-Kansas-768x512.jpg',
        description: 'Kansas',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Iowa',
        img: 'https://www.mylongdistancemovers.com/wp-content/uploads/2022/03/Moving-To-Kansas-768x512.jpg',
        description: 'Kansas',
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
      },
      {
        name: 'Kentucky',
        img: 'https://www.mylongdistancemovers.com/wp-content/uploads/2022/03/Moving-To-Kansas-768x512.jpg',
        description: 'Kansas',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Louisiana',
        img: 'https://www.mylongdistancemovers.com/wp-content/uploads/2022/03/Moving-To-Kansas-768x512.jpg',
        description: 'Kansas',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Maine',
        img: 'https://www.mylongdistancemovers.com/wp-content/uploads/2022/03/Moving-To-Kansas-768x512.jpg',
        description: 'Kansas',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Maryland',
        img: 'https://www.mylongdistancemovers.com/wp-content/uploads/2022/03/Moving-To-Kansas-768x512.jpg',
        description: 'Kansas',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Massachusetts',
        img: 'https://www.mylongdistancemovers.com/wp-content/uploads/2022/03/Moving-To-Kansas-768x512.jpg',
        description: 'Kansas',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Michigan',
        img: 'https://www.mylongdistancemovers.com/wp-content/uploads/2022/03/Moving-To-Kansas-768x512.jpg',
        description: 'Kansas',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Minnesota',
        img: 'https://www.mylongdistancemovers.com/wp-content/uploads/2022/03/Moving-To-Kansas-768x512.jpg',
        description: 'Kansas',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mississippi',
        img: 'https://www.mylongdistancemovers.com/wp-content/uploads/2022/03/Moving-To-Kansas-768x512.jpg',
        description: 'Kansas',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Missouri',
        img: 'https://www.mylongdistancemovers.com/wp-content/uploads/2022/03/Moving-To-Kansas-768x512.jpg',
        description: 'Kansas',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Montana',
        img: 'https://www.mylongdistancemovers.com/wp-content/uploads/2022/03/Moving-To-Kansas-768x512.jpg',
        description: 'Kansas',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nebraska',
        img: 'https://www.mylongdistancemovers.com/wp-content/uploads/2022/03/Moving-To-Kansas-768x512.jpg',
        description: 'Kansas',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nevada',
        img: 'https://www.mylongdistancemovers.com/wp-content/uploads/2022/03/Moving-To-Kansas-768x512.jpg',
        description: 'Kansas',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'New Hampsire',
        img: 'https://www.mylongdistancemovers.com/wp-content/uploads/2022/03/Moving-To-Kansas-768x512.jpg',
        description: 'Kansas',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'New Jersey',
        img: 'https://www.mylongdistancemovers.com/wp-content/uploads/2022/03/Moving-To-Kansas-768x512.jpg',
        description: 'Kansas',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'New Mexico',
        img: 'https://www.mylongdistancemovers.com/wp-content/uploads/2022/03/Moving-To-Kansas-768x512.jpg',
        description: 'Kansas',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'New York',
        img: 'https://www.mylongdistancemovers.com/wp-content/uploads/2022/03/Moving-To-Kansas-768x512.jpg',
        description: 'Kansas',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'North Carolina',
        img: 'https://www.mylongdistancemovers.com/wp-content/uploads/2022/03/Moving-To-Kansas-768x512.jpg',
        description: 'Kansas',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'North Dakota',
        img: 'https://www.mylongdistancemovers.com/wp-content/uploads/2022/03/Moving-To-Kansas-768x512.jpg',
        description: 'Kansas',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ohio',
        img: 'https://www.mylongdistancemovers.com/wp-content/uploads/2022/03/Moving-To-Kansas-768x512.jpg',
        description: 'Kansas',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Oklahoma',
        img: 'https://www.mylongdistancemovers.com/wp-content/uploads/2022/03/Moving-To-Kansas-768x512.jpg',
        description: 'Kansas',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Oregon',
        img: 'https://www.mylongdistancemovers.com/wp-content/uploads/2022/03/Moving-To-Kansas-768x512.jpg',
        description: 'Kansas',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pennsylvania',
        img: 'https://www.mylongdistancemovers.com/wp-content/uploads/2022/03/Moving-To-Kansas-768x512.jpg',
        description: 'Kansas',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rhode Island',
        img: 'https://www.mylongdistancemovers.com/wp-content/uploads/2022/03/Moving-To-Kansas-768x512.jpg',
        description: 'Kansas',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'South Carolina',
        img: 'https://www.mylongdistancemovers.com/wp-content/uploads/2022/03/Moving-To-Kansas-768x512.jpg',
        description: 'Kansas',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tennessee',
        img: 'https://www.mylongdistancemovers.com/wp-content/uploads/2022/03/Moving-To-Kansas-768x512.jpg',
        description: 'Kansas',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Texas',
        img: 'https://www.mylongdistancemovers.com/wp-content/uploads/2022/03/Moving-To-Kansas-768x512.jpg',
        description: 'Kansas',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Utah',
        img: 'https://www.mylongdistancemovers.com/wp-content/uploads/2022/03/Moving-To-Kansas-768x512.jpg',
        description: 'Kansas',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vermont',
        img: 'https://www.mylongdistancemovers.com/wp-content/uploads/2022/03/Moving-To-Kansas-768x512.jpg',
        description: 'Kansas',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Virginia',
        img: 'https://www.mylongdistancemovers.com/wp-content/uploads/2022/03/Moving-To-Kansas-768x512.jpg',
        description: 'Kansas',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Washington',
        img: 'https://www.mylongdistancemovers.com/wp-content/uploads/2022/03/Moving-To-Kansas-768x512.jpg',
        description: 'Kansas',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'West Virginia',
        img: 'https://www.mylongdistancemovers.com/wp-content/uploads/2022/03/Moving-To-Kansas-768x512.jpg',
        description: 'Kansas',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Wisconsin',
        img: 'https://www.mylongdistancemovers.com/wp-content/uploads/2022/03/Moving-To-Kansas-768x512.jpg',
        description: 'Kansas',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Wyoming',
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
