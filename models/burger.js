var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },

    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("burgers", condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;

$(".submit").on("click", function (event) {
    var id = $(this).data("id");
    var uneaten = $(this).data("uneaten");

    var eatNewBurger = {
        eaten: uneaten
    };

    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: eatNewBurger
    }).then(
        function () {
            console.log("Burger is ready to be devoured", newSleep);
            location.reload();
        }
    );
});

$(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
        name: $("#burgText").val().trim(),
    };

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            console.log("New Burger added");
            location.reload();
        }
    );
});