
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/',(req, res, next) => {
//this is not working cause . means it is serching in pc's root
   // res.sendFile('./views/shop.html')

   res.sendFile(path.join(__dirname,'../','views','shop.html'))
   //this will automatically build a path which works with all the linux as well as windows.
   
   
   

})



module.exports= router