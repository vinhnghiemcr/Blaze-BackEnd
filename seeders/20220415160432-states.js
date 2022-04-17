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
        img: 'https://i.pinimg.com/originals/c2/3c/28/c23c2862bdc2ae08b8b2dba11c2d38a6.jpg',
        description:
          'Several state-dedicated nature preserves protect a variety of wetland communities. We invite you to explore these interesting and beautiful wetlands.',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Iowa',
        img: 'https://i.redd.it/z18ncorscpq31.jpg',
        description:
          'From river to river or topsoil to bedrock, Iowas lands and waters are teeming with diversity and fascinating stories that inspire awe and appreciation for our rich natural heritage.',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kansas',
        img: 'https://cdn.onlyinyourstate.com/wp-content/uploads/2016/09/22373090565_ea767b18a2_k.jpg',
        description:
          'The western half of Kansas is covered by the Great Plains. The land slopes up from east to west from about 1,500 feet above sea level to around 4,000 feet along the Colorado border.',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kentucky',
        img: 'https://www.tripsavvy.com/thmb/sXFZ_MFglYZ8pGuaHW-7JlgjksY=/2114x1420/filters:fill(auto,1)/daniel-boone-national-forest-56a817135f9b58b7d0f088b6.jpg',
        description:
          'Kentucky is filled with beautiful landscapes and natural formations, some recognized nationwide.',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Louisiana',
        img: 'https://dtjew9b6f6zyn.cloudfront.net/wp-content/uploads/2019/05/4-43-1.jpg',
        description:
          'Louisianas nature is abundant. Get outside while on vacation to experience Louisianas parks and nature up close.',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Maine',
        img: 'https://i.pinimg.com/originals/78/77/85/7877856d892b2a476c99d96ff3bb23b4.jpg',
        description:
          'During your hike, youll learn about Maine wildlife, plants, fungi, history and more.',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Maryland',
        img: 'https://wetravelandblog.com/wp-content/uploads/2014/10/maryland-nature-12.jpg',
        description:
          'The Maryland landscape is a diverse and complex one with a variety of natural communities represented, from beaches and fringing tidal marshes along the coast to high-elevation peatlands and ravines of old-growth hemlock in the mountains.',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Massachusetts',
        img: 'https://cdn.onlyinyourstate.com/wp-content/uploads/2016/07/6408541819_dd2ac77772_b-700x526.jpg',
        description:
          'The highest waterfall in Massachusetts is also one of its most magical. Its waters flow through a hemlock forest and tumble over 60 feet into a sparkling basin. ',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Michigan',
        img: 'https://i.redd.it/6olsgrq45w3x.jpg',
        description:
          'Surprise incredible nature rock formations, awesome lake, hiking, boating and lots more in the Michigan upper peninsula.',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Minnesota',
        img: 'https://cdn.onlyinyourstate.com/wp-content/uploads/2015/10/4620163219_da97ddb29c_o-700x525-700x525.jpg',
        description:
          'Along with lakes, Minnesota is also home to many important rivers. One of the most beautiful, the St. Croix, is full of incredible scenery that is a must-see for any Minnesotan.',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mississippi',
        img: 'https://external-preview.redd.it/AHk7M__Pcz4c2TY9n1EFu0AFw357qosyjSraDbWU9S4.jpg?auto=webp&s=1daebd255c966a4874540f8c78e926f9d6904ac3',
        description:
          'Residents of the Magnolia State are lucky enough to experience the wonder that is Mississippi on a daily basis.',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Missouri',
        img: 'https://www.discovery.org/m/sites/61/2020/11/aerial-view-of-river-in-tropical-green-forest-with-mountains-in-background-stockpack-adobe-stock-scaled.jpg',
        description:
          'Here you can find natural rock water-slides, deep blue springs, man-made mines, river valleys, and rolling hills, each offering their own special type of awe throughout the seasons.',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Montana',
        img: 'https://cdn.wallpapersafari.com/27/49/Pjelur.jpg',
        description:
          'Montana has numerous beautiful waterfalls, but the gorgeous Morrell Falls are especially enchanting.',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nebraska',
        img: 'https://cdn.onlyinyourstate.com/wp-content/uploads/2015/12/8146098568_bf78650602_k.jpg',
        description:
          'From stunning caves to unique rock formations, delightful parks to strenuous hiking trails, quiet lake beaches to beautiful river islands, mountain bluffs to lush gardens.',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nevada',
        img: 'https://www.tripsavvy.com/thmb/_zoUth2mRt5AZvg6g5z8qBlr4Gc=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-468825359-597a56c022fa3a0010aaaa6c.jpg',
        description: 'Nevada is an interesting wildlife destination.',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'New Hampsire',
        img: 'https://i.redd.it/2398ktgw9cqx.jpg',
        description:
          'With mountains to climb or maybe ride, ocean views to admire and vast landscapes to explore, there is something for everyone.',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'New Jersey',
        img: 'https://i1.wp.com/shortweeks-longweekends.com/wp-content/uploads/2018/07/JoxTE03w.jpeg.jpg?fit=1200%2C805&ssl=1',
        description:
          'Residents know the truth - incredible landscapes can be found throughout the state. We have mountains, lakes, woodlands, waterfalls and so much more!',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'New Mexico',
        img: 'https://wallpapercave.com/wp/wp2031689.jpg',
        description:
          'With the dramatic landscape of red and yellow cliffs, Ghost Ranch in Abiquiu, New Mexico, encompasses 21,000 acres of towering rock walls, vivid colors and vast skies.',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'New York',
        img: 'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/MontaukBluffsNY.jpg?crop=0,223,2000,1100&wid=4000&hei=2200&scl=0.5',
        description:
          'Here in one of the largest cities in the world, you can find wetlands, grasslands, forests, rivers, ponds, lakes, and miles and miles of beaches, dunes, and barrier islands.',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'North Carolina',
        img: 'https://www.shamanism.com/wp-content/uploads/2019/07/blue-mountains-bg-2000px_1281px.jpg',
        description:
          'You can explore the amazing rock outcroppings and hiking throughout the 6,807-acre state park, or climb 499 steps to the top of the iconic Chimney formed 535-million years ago.',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'North Dakota',
        img: 'https://cg-travel-media-library.s3.ca-central-1.amazonaws.com/cangeo/cg-travel/current/wp-content/uploads/2021/01/11065554/CHaney-Little-Mo-River_016-1024x683.jpg',
        description:
          'North Dakota has a huge expanse of beautiful natural land. It is located around the Souris River. Gently rolling prairie hills and wetlands fill the area and they are full of wildlife.',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ohio',
        img: 'https://www.wallpaperup.com/uploads/wallpapers/2016/06/24/991635/f86f15e190c7ed8044e217cfeb662cf3-700.jpg',
        description:
          'The largest state park in Ohio, Salt Fork State Park is 17,229 acres that showcases Ohios natural beauty.',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Oklahoma',
        img: 'https://cdn.onlyinyourstate.com/wp-content/uploads/2017/07/ok706-talimena-700x466.jpg',
        description:
          'With 35 state parks, nine national wildlife refuges and dozens of other locally-managed conservation areas, Oklahoma has a plethora of natural attractions for families to explore.',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Oregon',
        img: 'https://cdn.wallpapersafari.com/84/78/u89zZd.jpg',
        description:
          'Silver Falls State Park is Oregons largest state park, and its full to the brim with only the most breathtaking scenery. ',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pennsylvania',
        img: 'https://cdn.onlyinyourstate.com/wp-content/uploads/2017/07/2-15.jpg',
        description:
          'The state of Pennsylvania is often best known for its big cities of Philadelphia and Pittsburgh, but theres a whole lot of nature and green space throughout the rest of the region as well.',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rhode Island',
        img: 'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tncrhodeisland_81964394_4000x2200.jpg?crop=0,0,4000,2200&wid=4000&hei=2200&scl=1.0',
        description:
          'While we are nicknamed the Ocean State, Rhode Island also could be dubbed the Forest State as more than 50 percent of our area is forested. ',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'South Carolina',
        img: 'https://cdn.onlyinyourstate.com/wp-content/uploads/2015/06/15760153892_9574e760e1_k1-700x467.jpg',
        description:
          'South Carolinas beautiful Upstate, is breathtakingly beautiful with mountains that have vertical drops youd see out West in larger mountain ranges.',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'South Dakota',
        img: 'https://dtjew9b6f6zyn.cloudfront.net/wp-content/uploads/2018/07/view-along-roughlock.jpg',
        description:
          'Not only is it a beautiful natural place, but it also has a rich, sacred Native American history.',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tennessee',
        img: 'https://bcbstwelltuned.com/wp-content/uploads/2016/09/fallcreekfalls.jpg',
        description:
          'Tennessee may not be known as "The Natural State" (whatever, Arkansas), but it is a fabulous place for folks to explore the great outdoors.',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Texas',
        img: 'https://www.tripsavvy.com/thmb/wi4l8t4XxtrZ_xV76o6lqp274cc=/3865x2576/filters:no_upscale():max_bytes(150000):strip_icc()/waterfall-at-hamilton-pool-preserve-in-dripping-springs-texas-717173753-5a1df5ceec2f640037c4f918.jpg',
        description:
          'Backpacking, mountain biking, fishing, boating, hiking, nature watching, camping - you name it, if it can be done outdoors, it can be done in Big Bend.',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Utah',
        img: 'https://cdn.fstoppers.com/styles/full/s3/photos/2019/11/2298b524f187f56e3ec02cbc6a778063.jpg?itok=0p5xgZVU',
        description:
          'Moab, Utah, home to Arches and Canyonlands National Parks, is surrounded by some of the most stunning red rock landscapes on Earth.',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vermont',
        img: 'https://i.pinimg.com/originals/7d/4d/87/7d4d87bfc2fdc74833981dcbaac58619.jpg',
        description:
          'Vermont is a state thats known for its vast array of scenic spots, and we simply love exploring them all. ',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Virginia',
        img: 'https://www.wallpaperup.com/uploads/wallpapers/2016/06/24/991616/a0252112ad1cf74574a31d28eadf7bc9-700.jpg',
        description:
          'Virginia offers over 200 species of birds and wildlife including deer, black bear, bobcats, river otters and more. ',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Washington',
        img: 'https://live.staticflickr.com/65535/50336473582_934cd883b9_b.jpg',
        description:
          'An Icon on the Horizon. Ascending to 14,410 feet above sea level, Mount Rainier stands as an icon in the Washington landscape.',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'West Virginia',
        img: 'https://wvtourism.com/wp-content/uploads/2018/08/BlackwaterCanyonFall-sjs-05.jpg',
        description:
          '7 natural wonders in the National Parks and beyond The hills and hollows of West Virginia hide an amazing number of natural wonders, from craggy peaks to subterranean caves.',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Wisconsin',
        img: 'https://www.goodfreephotos.com/albums/united-states/wisconsin/madison/wisconsin-madison-the-nature-boardwalk.jpg',
        description:
          'From stunning sea caves to towering waterfalls, Wisconsin is home to some of the most breathtaking natural wonders this side of the Mississippi. ',
        longitude: 188181,
        latitude: 17171,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Wyoming',
        img: 'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/wind-river-mtnstnc_63580406_Full.jpg?crop=0,105,1800,990&wid=4000&hei=2200&scl=0.45',
        description:
          'Wyoming has an abundance of natural beauty so it’s no wonder that this spectacular state is home to seven incredible natural wonders.',
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
