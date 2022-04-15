'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class UserFollower extends Model {
    static associate(models) {}
  }
  UserFollower.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      followerId: {
        type: DataTypes.INTEGER,
        field: 'follower_id',
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'UserFollower',
      tableName: 'userFollowers'
    }
  )
  return UserFollower
}
