const sequelize = require("../util/database");
const Datatypes = require('sequelize');

const CartItem = sequelize.define('cartItem',{
  id:{
    type:Datatypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true

  },
  quantity:Datatypes.INTEGER

})

module.exports= CartItem;

