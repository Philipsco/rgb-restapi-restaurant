'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class menu_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  menu_type.init({
    name: {
      allowNull: false,
      type :DataTypes.STRING}
  }, {
    sequelize,
    modelName: 'menu_type',
  });
  return menu_type;
};