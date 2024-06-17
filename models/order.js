const sequelize = require("../util/database");
const Datatypes = require('sequelize');

const Order = sequelize.define('order',{
  id:{
    type:Datatypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true

  }

})

module.exports= Order;
//a order belongs to single user but may hold multiple products

