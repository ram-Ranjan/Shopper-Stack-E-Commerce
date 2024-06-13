const sequelize = require("../util/database");
const Datatypes = require('sequelize')

const User = sequelize.define('user',{
    id:{
        type:Datatypes.INTEGER,
        autoIncrement:true,
        allowNull :false,
        primaryKey:true
    },
    username:{
        type:Datatypes.STRING,
        allowNull:false
    },
    email:{
        type:Datatypes.STRING,
        allowNull:false
    },
    phoneNumber:{
        type:Datatypes.BIGINT,
        allowNull:false
    }
});

module.exports=User;