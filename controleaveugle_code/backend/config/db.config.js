// Get the mysql service
var mysql = require('mysql');

// Add the credentials to access your database
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'ControleAveugleDb',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

// connect to mysql
connection.connect(function(err) {
    // in case of error
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }
});

// Perform a query
$query = 'SELECT * from user LIMIT 10';

connection.query($query, function(err, rows, fields) {
    if(err){
        console.log("An error ocurred performing the query.");
        return;
    }

    console.log("Query succesfully executed: ", rows);
});

// Close the connection
connection.end(function(){
    // The connection has been closed
    console.log("connexion DB ended");
});


module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "root",
    DB: "ControleAveugleDb",
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };