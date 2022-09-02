'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  order.init({
    employee_id: {
      allowNull: false,
      type:DataTypes.INTEGER},
    order_number: {
      unique:true,
      allowNull: false,
      type:DataTypes.STRING},
    order_date: {
      allowNull: false,
      type:DataTypes.DATEONLY},
    table_number: {
      allowNull: false,
      type:DataTypes.INTEGER},
    total_price: {
      allowNull: false,
      type:DataTypes.INTEGER}
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};