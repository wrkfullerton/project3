const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "sevilla08",
    database: "userdb"
});

const app = express();

//console is showing message
//too many different routes and folders cant find the correct route to populate mysql data into console


app.get("/Users", function (req, res) {

    connection.getConnection(function (err, connection) {



        connection.query("SELECT * FROM Users", function (error, results, fields) {


            if (error) throw error;
            res.send(results)
        });
    });
});

app.listen(3000, () => {
    console.log("go to localhost");
});