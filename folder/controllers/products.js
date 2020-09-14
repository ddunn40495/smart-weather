const express = require('express')
const router = express.Router()
const Product = require('../models/products')


/* ===========
GET ROUTE
============= */
//NEW
router.get('/new', (req, res)=>{
    res.render('new.ejs');
});



/* ===========
POST ROUTE
============= */
//CREATE
router.post('/', (req, res)=>{
    Product.create(req.body, (error, createdProduct)=>{
        res.redirect('/store');
    });
});




/* ===========
GET ROUTE
============= */
//SHOW
router.get('/:id', (req, res)=>{
    Product.findById(req.params.id, (err, foundProduct)=>{
        res.render('show.ejs', {
            product:foundProduct
        });
    });
});


/* ===========
GET ROUTE
============= */
//INDEX
router.get('/', (req, res)=>{
    Product.find({}, (error, allProducts)=>{
        res.render('index.ejs', {
            product: allProducts
        });
    });
});

/* ===========
PUT ROUTE
============= */
//UPDATE
router.put('/:id', (req, res)=>{
    Product.findByIdAndUpdate(req.params.id, req.body, (err, updatedModel)=>{
        res.redirect('/store');
    });
});

/* ===========
GET ROUTE
============= */
//EDIT
router.get('/:id/edit', (req, res)=>{
    Product.findById(req.params.id, (err, foundProduct)=>{ 
        res.render(
    		'edit.ejs',
    		{
    			product: foundProduct 
    		}
    	);
    });
});

/* ===========
DELETE ROUTE
============= */
//DELETE
router.delete('/:id', (req, res)=>{
    Product.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/store');
    });
});




module.exports = router