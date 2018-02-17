const connection = require('./connection.js');

const orm = {
    selectAll: function(table, cb) {
        let queryString = 'SELECT * FROM ' + table;
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function(table, col, val, cb) {
        let queryString = 'INSERT INTO ' + table + '(' + col + ') VALUES (?)'; 
        connection.query(queryString, [val], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    updateOne: function(table, col, colVal, condition, conditionVal, cb) {
        let queryString = 'UPDATE ' + table + ' SET ' + col + ' =? WHERE ' + condition + '=?';
        connection.query(queryString, [colVal, conditionVal], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;