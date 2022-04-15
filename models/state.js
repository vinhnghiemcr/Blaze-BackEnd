'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class State extends Model {
    static associate(models) {
      State.hasMany(models.Trail, { as: 'trails', foreignKey: 'state_id' })
    }
  }
  State.init(
    {
      name: DataTypes.STRING,
      img: DataTypes.STRING,
      description: DataTypes.STRING,
      longitude: DataTypes.INTEGER,
      latitude: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'State',
      tableName: 'states'
    }
  )
  return State
}
