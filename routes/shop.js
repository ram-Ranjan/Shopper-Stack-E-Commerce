
const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {

    res.send(`<h2>Hello From Express Js</h2>`)


})

router.get('/home',(req, res, next) => {

    res.send(`<h2>Welcome to the shop Home Page</h2>`)


})

module.exports= router