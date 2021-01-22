var connection = require("../config/connection.js");

// These are the methods you will need to use in order to
//  retrieve and store data in your database.
function selectAll() {


}


function insertOne() {


}


function updateOne() {



}

var orm = {
    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) { throw err; }
            cb(result);
        });
    },
    create: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table + " (" + cols.toString() + ") VALUES (" + vals.length;

        console.log(queryString);
        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    update: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table + " SET " + objColVals + " WHERE " + condition;
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });

    },

    delete: function () {

    }
};



module.exports = orm;