const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get('/', function(req, res) {
    burger.selectAll(function(data) {
        let hbsObj = {
            burgerData: data
        };
        res.render('index', hbsObj);
    });
});

router.post('/burgers', function(req, res) {
    burger.insertOne([
        'burger_name'
    ], [
        req.body.burger_name
    ], function(data) {
        res.redirect('/');
    });
});

router.put('update/:id', function(req, res) {
    let condition = 'id = ' + req.params.id;

    burger.updateOne({
        devoured: true
    }, condition, function(data) {
        res.redirect('/');
    });
});

module.exports = router;