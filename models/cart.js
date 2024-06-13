const sequelize = require("../util/database");
const Datatypes = require('sequelize');

const Cart = sequelize.define('cart',{
  id:{
    type:Datatypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true

  }

})

module.exports= Cart;
//a cart belongs to single user but may hold multiple products

