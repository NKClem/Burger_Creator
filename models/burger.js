const orm = require('../config/orm.js');

let burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },
    insertOne: function(colName, colVal, cb) {
        orm.insertOne('burgers', colName, colVal, function(res) {
            cb(res);
        });
    },
    updateOne: function(colVal, idVal, cb) {
        orm.updateOne('burgers', 'devoured', colVal, 'id', idVal, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;