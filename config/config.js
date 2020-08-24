// require("dotenv").config();
// module.exports = {
//     "development": {
//         "username": "root",
//         "password": "password",
//         "database": "userdb",
//         "host": "localhost",
//         "port": "3306",
//         "dialect": "mysql"
//     },
//     "test": {
//         "username": "root",
//         "password": "password",
//         "database": "database_test",
//         "host": "127.0.0.1",
//         "dialect": "mysql"
//     },
//     "production": {
//         "use_env_variable": "JAWSDB_URL",
//         "dialect": "mysql"

//         // "username": "kehuneyxscvi5ziz",
//         // "password": "lu73w1lkz4lkf20g",
//         // "database": "we229i36ekozs5d1",
//         // "host": "JAWSDB_URL",
//         // "port": "3306",
//         // "dialect": "mysql"
//     },

// };
//

require("dotenv").config();

module.exports = {
    "development": {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_DATABASE,
        "host": process.env.DB_HOST,
        "port": process.env.DB_PORT,
        "dialect": "mysql"
    },
    "production": {
        "use_env_variable": "JAWSDB_URL",
        "dialect": "mysql"
    }
};
