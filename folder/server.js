// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const port = 3000;
const productsController = require('./controllers/products')
app.use(express.json())
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));  
app.use(methodOverride('_method'));


// =======================================
//              DATABASE
// =======================================
const dataBaseVar = 'storeDB'
const mongoURI = 'mongodb://localhost:27017/'+ dataBaseVar;
const db = mongoose.connection;



// =======================================
//      MONGOOSE CONNECTION LOGIC
// =======================================
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify : false }, () => {
	console.log('the connection with mongod is established')
})
db.once('open', ()=> {
  console.log('mongo connected: ', mongoURI);
});
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('disconnected', () => console.log('mongo disconnected'));


// =======================================
//              ROUTES
// =======================================
app.use('/store', productsController)




// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(`listening on port: ${port}`)
});