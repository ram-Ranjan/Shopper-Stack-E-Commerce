const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const sequelize = require('./util/database');

const Product= require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart')
const CartItem = require('./models/cart-item')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// db.execute('Select * from Products')
// .then( result => {
//     console.log(result[0],result[1]);
     
// })
// .catch(err => console.log(err));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//This will run once Sequelize created a user and our port started listen to requests
app.use((req,res,next)=> {
  User.findByPk(1)
  .then(user => {
    req.user=user;
    next();
  })
  .catch(err => console.log(err))
})


app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User,{ constraints:true ,onDelete: 'CASCADE'});
User.hasMany(Product);

User.hasOne(Cart);
Cart.belongsTo(User);//One direction

Cart.belongsToMany(Product , { through:CartItem });
Product.belongsToMany(Cart,{ through:CartItem });




sequelize
  // .sync({ force: true })//to recreate products table with user integration
  .sync()
  .then(result => {
    return User.findByPk(1);
    // if there is a single user, return it.
  })
  .then(user => {
    if(!user){
     return User.create({username:'Ranjan',email:'ranjan@gmail.com',phoneNumber:'977867867'})
    }
    return user;
  })
  // .then(user => {
  //   return Promise.resolve(user);


  // })
  .then(user => {
    // console.log(user)
    user.createCart();

  })
  .then(cart => {
    app.listen(3000);

  }
  )
  .catch(err => {
    console.log(err);
  });
