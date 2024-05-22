const express = require('express')

const bodyParser = require('body-parser')
const app = express();



app.use(bodyParser.urlencoded({ extended:false }));

app.use('/add-product',(req, res, next) => {

    console.log(" In the Middleware")
   res.send(`<form action="/product" method="POST"> <input type="text" name="title">  <button type="submit">Add</button></form>`)


})


app.use('/product',(req, res, next) => {

    console.log(req.body)
    res.redirect('/')

})



app.use('/',(req, res, next) => {

    res.send(`<h2>Hello From Express Js</h2>`)


})


app.listen(3000)
// const server = http.createServer(app);


// server.listen(4000,'localhost', () => console.log("Handling Requests"))

