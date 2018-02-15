const connection = require('./connection.js');

function printQueryMarks(num) {
    let queryArr = [];

    for (let i = 0; i < num; i++) {
        queryArr.push('?');
    }

    return queryArr.toString();
}

function objToSql(ob) {
    let objArr = [];

    for (let key in ob) {
        let value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = "'" + value + "'";
            }
            objArr.push(key + '=' + value);
        }
    }
    return objArr.toString();
}

const orm = {
    selectAll: function(table, cb) {
        let queryString = 'SELECT * FROM ' + table + ';';
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        let queryString = 'INSERT INTO ' + table;

        queryString += ' (';
        queryString += cols.toString();
        queryString += ') ';
        queryString += 'VALUES (';
        queryString += printQueryMarks(vals.length);
        queryString += ') ';

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    updateOne: function(table, objColVals, condition, cb) {
        let queryString = 'UPDATE ' + table;
        queryString += ' SET ';
        queryString += objToSql(objColVals);
        queryString += ' WHERE ';
        queryString += condition;

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;