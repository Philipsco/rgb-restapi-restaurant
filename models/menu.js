'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  menu.init({
    menu_type_id: {
      allowNull: false,
      type:DataTypes.INTEGER},
    name: {
      allowNull: false,
      type:DataTypes.STRING},
    price: {
      allowNull: false,
      type:DataTypes.INTEGER}
  }, {
    sequelize,
    modelName: 'menu',
  });
  return menu;
};