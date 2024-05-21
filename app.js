
const http = require("http");

const express = require('express')
const app = express();


app.use((req, res, next) => {

    console.log(" In the Middleware")
    next();


})


app.use((req, res, next) => {

    console.log(" In Another Middleware")
    // res.send(`<h2>Hello From Express Js</h2>`)
    res.send( { key1: value }) 


})
const server = http.createServer(app);


server.listen(4000,'localhost', () => console.log("Handling Requests"))

