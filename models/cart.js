
const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);

module.exports = class Cart {
   static addProduct(id){
    //feth 
    fs.readFile(p,(err,fileContent) => {
        let cart = {products:[], totalPrice : 0};
        if(!err){
            cart = JSON.parse(fileContent)
        }
    })
   }
}