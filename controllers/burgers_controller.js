const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get('/', function(req, res) {
    let burgArr = [];

    burger.selectAll(function(data) {
        for (let i = 0; i < data.length; i++) {
            burgArr.push(data[i]);
        }
        console.log(burgArr);
        res.render('index', burgArr);
    });
});

router.post('/create', function(req, res) {
    burger.insertOne([
        'burger_name', 'devoured'
    ], [
        req.body.name, 0
    ], function(result) {
        res.redirect('/');
    });
});

router.put('update/:id', function(req, res) {
    burger.updateOne([
        req.body.devoured
    ],
    [
        req.params.id
    ], function() {
        res.redirect('/');
    });
});

module.exports = router;