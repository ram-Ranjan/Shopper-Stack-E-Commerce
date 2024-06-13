const Sequelize = require('sequelize');

const sequelize = require('../util/database');


const Product = sequelize.define(
  'product',{
    id:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull :  false
    },
    title:{
      type: Sequelize.STRING,
      allowNull:false

    },
    price:{
      type: Sequelize.DOUBLE,
      allowNull : false 
    },
    imageUrl:{
      type:Sequelize.TEXT,
      allowNull: false
    },
    description:{
      type:Sequelize.TEXT,
      allowNull : null
    }

  }
  
);

module.exports= Product;
