const express = require("express");
// const bodyParser = require("body-parser");
const mysql = require("mysql");
var app = express();
// app.use(bodyparser.json());


var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sevilla08',
    database: 'userdb',
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log('Connection Established Successfully');
    else
        console.log('Connection Failed!' + JSON.stringify(err, undefined, 2));
});

//Establish the server connection
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));

//Creating GET Router to fetch all the learner details from the MySQL Database
app.get('/users', (req, res) => {
    mysqlConnection.query('SELECT * FROM Users', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});



// const connection = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "sevilla08",
//     database: "userdb"
// });


//console is showing message
//too many different routes and folders cant find the correct route to populate mysql data into console


// app.get("/", (req, res) => {
//     db.Users.findAll()
//         .then(menu => {
//             res.send(menu)
//         })
//         .catch(err => console.log(err));
// });

//     connection.getConnection(function (err, connection) {



//         connection.query("SELECT * FROM Users", function (error, results, fields) {


//             if (error) throw error;
//             res.send(results)
//         });
//     });
// });

// app.listen(3000, () => {
//     console.log(results);
// });

