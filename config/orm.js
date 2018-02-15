const connection = require('./connection.js');

const orm = {
    selectAll: function(table) {
        let queryString = 'SELECT * from ??';
        connection.query(queryString, [table], function(err, res) {
            if (err) throw err;
            console.log(res);
        });
    },
    insertOne: function(table, colName, newVals) {
        let queryString = 'INSERT INTO ?? (??) VALUES ?';
        connection.query(queryString, [table, colName, newVal], function(err, res) {
            if (err) throw err;
            console.log(res);
        });
    },
    updateOne: function(table, colName, colVal, id, idVal) {
        let queryString = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
        connection.query(queryString, ['burgers', colName, colVal, id, idVal], function(err, res) {
            if (err) throw err;
            console.log(res);
        });
    }
};

module.exports = orm;