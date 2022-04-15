'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Trails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Trails.init(
    {
      parkId: DataTypes.INTEGER,
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
      modelName: 'Trails',
      tableName: 'trails'
    }
  )
  return Trails
}
