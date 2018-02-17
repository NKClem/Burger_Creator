const mysql = require('mysql');
const Key = require('./keys.js');

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        root: Key.port,
        host: 'localhost',
        user: 'root',
        password: Key.key,
        database: 'burgers_db'
    });
};

connection.connect(function(err) {
    if (err) {
        console.error(`error connecting ${err.stack}`);
        return;
    }
    console.log(`connected as id: ${connection.threadId}`);
});

module.exports = connection;