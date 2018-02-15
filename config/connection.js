const mysql = require('mysql');
const Key = require('./keys.js');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: Key.key,
    database: 'burgers_db'
});

connection.connect(function(err) {
    if (err) {
        console.error(`error connecting ${err.stack}`);
        return;
    }
    console.log(`connected as id: ${connection.threadId}`);
});

module.exports = connection;