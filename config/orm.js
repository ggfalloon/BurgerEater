var connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}
// retrieves and stores data into database

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) { throw err; }
            cb(result);
        });
    },
    insertOne: function (table, cols, vals, cb) {

        var queryString = "INSERT INTO " + table + " (" + cols.toString() + ") VALUES (?, ?);";

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
        // console.log(queryString)
        // console.log(objColVals);
        connection.query(queryString, objColVals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
};



module.exports = orm;