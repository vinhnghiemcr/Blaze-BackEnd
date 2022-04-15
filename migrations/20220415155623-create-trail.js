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
        type: Sequelize.INTEGER,
        field: 'state_id',
        onDelete: 'CASCADE',
        references: {
          model: 'states',
          key: 'id'
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
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
