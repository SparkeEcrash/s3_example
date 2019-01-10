const mysql = require('mysql');
const { dbConfig } = require('../config');
const { promisify } = require('util');

const db = mysql.createConnection(dbConfig);

db.query = promisify(db.query);

db.connect((err) => {
    if(err){
        console.log('Error connecting to MySQL DB\n\n');
        console.log(err);
        return;
    }
    console.log('Connected to MySQL DB');
});

module.exports = db;
