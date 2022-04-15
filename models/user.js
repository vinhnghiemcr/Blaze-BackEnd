'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Trail, { foreignKey: 'user_id' })
      User.hasMany(models.Post, { foreignKey: 'user_id' })
      User.hasMany(models.Comment, { foreignKey: 'user_id' })
      User.belongsToMany(models.User, {
        as: 'followers',
        through: models.UserFollower,
        foreignKey: 'userId'
      })
      User.belongsToMany(models.User, {
        as: 'following',
        through: models.UserFollower,
        foreignKey: 'followerId'
      })
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      passwordDigest: DataTypes.STRING,
      name: DataTypes.STRING,
      trailName: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  )
  return User
}
