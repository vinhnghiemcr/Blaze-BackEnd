'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Trail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Trail.belongsTo(models.State, { foreignKey: 'state_id' })
      Trail.belongsTo(models.User, { foreignKey: 'user_id' })
      Trail.hasMany(models.Post, { foreignKey: 'trail_id', as: 'posts' })
    }
  }
  Trail.init(
    {
      stateId: {
        type: DataTypes.INTEGER,
        field: 'state_id',
        onDelete: 'CASCADE',
        references: {
          model: 'states',
          key: 'id'
        }
      },
      userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      name: DataTypes.STRING,
      img: DataTypes.STRING,
      location: DataTypes.STRING,
      longitude: DataTypes.INTEGER,
      latitude: DataTypes.INTEGER,
      difficulty: DataTypes.STRING,
      length: DataTypes.FLOAT,
      elevationChange: DataTypes.INTEGER,
      routeType: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Trail',
      tableName: 'trails'
    }
  )
  return Trail
}
