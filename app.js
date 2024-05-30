const express = require('express')

const bodyParser = require('body-parser')
const app = express();
const path = require('path');

const errorController = require('./controllers/error')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended:false }));


app.use('/admin',adminRoutes);
app.use(shopRoutes);


app.use(express.static(path.join(__dirname,'public')));

app.use(errorController.get404())

app.listen(3000,'localhost',() => {
    console.log('listening to port 3000')
})

