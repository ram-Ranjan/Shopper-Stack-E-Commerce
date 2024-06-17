const sequelize = require("../util/database");
const Datatypes = require('sequelize');

const OrderItem = sequelize.define('orderItem',{
  id:{
    type:Datatypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true

  },
  quantity:Datatypes.INTEGER

})

module.exports= OrderItem;

