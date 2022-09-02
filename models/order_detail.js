'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  order_detail.init({
    order_id: {
      allowNull: false,
      type:DataTypes.INTEGER},
    menu_id: {
      allowNull: false,
      type:DataTypes.INTEGER},
    unit_price: {
      allowNull: false,
      type:DataTypes.INTEGER},
    quantity: {
      allowNull: false,
      type:DataTypes.INTEGER},
    sum_price: {
      allowNull: false,
      type:DataTypes.INTEGER}
  }, {
    sequelize,
    modelName: 'order_detail',
  });
  return order_detail;
};