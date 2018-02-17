const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get('/', function(req, res) {
    res.redirect('/index');
});

router.get('/index', function(req, res) {
    burger.selectAll(function(data) {
        let burgerData = { 
            burgers: data 
        };
        
        res.render('index', burgerData);
    });
});

router.post('/create', function(req, res) {
    burger.insertOne([req.body.burger_name], function() {
        res.redirect('/index');
    });
});

router.put('/update/:id', function(req, res) {
    burger.updateOne([req.body.devour], [req.params.id], function(data) {
        res.redirect('/index');
    });
});

router.delete('/delete/:id', function(req, res) {
    burger.deleteOne([req.params.id], function() {
        res.redirect('/index');
    });
});

module.exports = router;