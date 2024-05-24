const express = require('express')

const bodyParser = require('body-parser')
const app = express();


const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended:false }));


app.use(adminRoutes);
app.use(shopRoutes)



app.use((req,res,next) => {
    res.status(404).send(`<h1>Page doesn't exist</h1>`)
})

app.listen(3000)
// const server = http.createServer(app);


// server.listen(4000,'localhost', () => console.log("Handling Requests"))

