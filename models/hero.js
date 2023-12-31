'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Hero.init({
    name: DataTypes.STRING,
    level: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Hero',
  });
  return Hero;
};