'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.Post, { foreignKey: 'post_id' })
      Comment.belongsTo(models.User, { foreignKey: 'user_id' })
    }
  }
  Comment.init(
    {
      content: DataTypes.STRING,
      postId: {
        type: DataTypes.INTEGER,
        field: 'post_id',
        onDelete: 'CASCADE',
        references: {
          model: 'posts',
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
      modelName: 'Comment',
      tableName: 'comments'
    }
  )
  return Comment
}
