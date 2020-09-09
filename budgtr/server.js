// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
// const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const port = 3000;
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));  
app.use(express.json())
app.use(methodOverride('_method'));


// =======================================
//              DATABASE
// =======================================
const budgetData = require('./models/budget.js')
// =======================================
//      MONGOOSE CONNECTION LOGIC
// =======================================
//REPLACE 'basiccrud' WITH YOUR DATABASE
// mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify : false });
// mongoose.connection.once('open', ()=> {
//   console.log('connected to mongo');
// });
// =======================================
//              ROUTES
// =======================================


/* ===========
GET ROUTE
============= */
//NEW
app.get('/budget/new', (req, res) => {
    res.render('new.ejs');
  });


/* ===========
POST ROUTE
============= */
//CREATE
//post
app.post('/budget', (req, res) => {
    budgetData.push(req.body)
    res.redirect('/budget')
   
})



/* ===========
GET ROUTE
============= */
//SHOW
app.get('/budget/:indexOfbudgetData', (req, res) => {
    res.render('show.ejs', {
      budgetData: budgetData[req.params.indexOfbudgetData],
      index: req.params.indexOfbudgetData
    })
  })


/* ===========
GET ROUTE
============= */
//INDEX
app.get('/budget', (req, res) => {
    res.render('index.ejs', {
      budgetData: budgetData
    })
  })

/* ===========
PUT ROUTE
============= */
//UPDATE


/* ===========
GET ROUTE
============= */
//EDIT
app.get('/budget/:indexOfbudgetData/edit', (req, res)=>{
	res.render(
		'edit.ejs', //render views/edit.ejs
		{ //pass in an object that contains
			fruit: fruits[req.params.index], //the fruit object
			index: req.params.index //... and its index in the array
		}
	)
})

/* ===========
DELETE ROUTE
============= */
//DELETE

app.delete('/budget', (req, res) => {
  budgetData.splice(req.params.indexOfbudgetData, 1)
  res.redirect('/budget')
})


// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(`listening on port: ${port}`)
});