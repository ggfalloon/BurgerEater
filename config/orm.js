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
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) { throw err; }
            cb(result);
        });
    },
    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table + " (" + cols.toString() + ") VALUES (" + vals.length + ")";

        console.log(queryString);
        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table + " SET ? WHERE " + condition;
        console.log(queryString)
        console.log(objColVals);
        connection.query(queryString, objColVals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
};



module.exports = orm;