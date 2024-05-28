
const express = require('express');
const router = express.Router();
const path = require('path');

const rootDir = require('../util/path');



router.get('/',(req, res, next) => {
//this is not working cause . means it is serching in pc's root
   // res.sendFile('./views/shop.html')

   res.sendFile(path.join(rootDir,'views','shop.html'))
   //this will automatically build a path which works with all the linux as well as windows.
   
})


router.get('/contactus',(req,res) => {
    res.sendFile(path.join(rootDir,'views','contact.html'))
})

router.post('/status',(req,res) => {
    res.sendFile(path.join(rootDir,'views','status.html'))
})


module.exports= router