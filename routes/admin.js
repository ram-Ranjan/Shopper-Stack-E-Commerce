const express = require('express');
const router = express.Router();



router.get('/add-product',(req, res, next) => {

    console.log(" In the Middleware")
   res.send(`<form action="/product" method="POST"> <input type="text" name="title">  
   <input type="text" name="productSize" placeholder="Product Size" required>
   <button type="submit">Add</button></form>`)


})


router.post('/product',(req, res, next) => {

    console.log(req.body)
    res.redirect('/')

})

module.exports= router
