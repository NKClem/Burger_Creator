const orm = require('../config/orm.js');

let burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, newVals, cb) {
        orm.insertOne('burgers', cols, newVals, function(res) {
            cb(res);
        });
    },
    updateOne: function(table, colName, colVal, id, idVal, cb) {
        orm.updateOne('burgers', colName, colVal, id, idVal, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;