// const mysql = require('mysql2');
// //After execution of every query we should close a particular connection.
// // this could be problematic while executing a single connection.

// //Rather than creating a single connection we create a connection pool which gives 
// //a pool of connections to use.
// const pool = mysql.createPool({
//     host: 'localhost',
//     user:'root',
//     database:'e-commerce',
//     password:'root@321'
// });
// module.exports = pool.promise();


//
const Sequelize = require('sequelize');

const sequelize = new Sequelize('e-commerce','root','root@321',{
    dialect:'mysql',
    host:'localhost'
});

module.exports = sequelize;

