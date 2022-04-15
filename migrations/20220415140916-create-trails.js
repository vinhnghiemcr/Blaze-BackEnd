'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('trails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stateId: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      img: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      longitude: {
        type: Sequelize.INTEGER
      },
      latitude: {
        type: Sequelize.INTEGER
      },
      difficulty: {
        type: Sequelize.STRING
      },
      length: {
        type: Sequelize.FLOAT
      },
      elevationChange: {
        type: Sequelize.INTEGER
      },
      routeType: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('trails')
  }
}
