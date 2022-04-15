'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.Trail, { foreignKey: 'trail_id' })
      Post.belongsTo(models.User, { foreignKey: 'user_id' })
      Post.hasMany(models.Comment, { foreignKey: 'post_id' })
    }
  }
  Post.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      img: DataTypes.STRING,
      trailId: {
        type: DataTypes.INTEGER,
        field: 'trail_id',
        onDelete: 'CASCADE',
        references: {
          model: 'trails',
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
      }
    },
    {
      sequelize,
      modelName: 'Post',
      tableName: 'posts'
    }
  )
  return Post
}
