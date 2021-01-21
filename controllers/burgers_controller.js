var express = require("express");

var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function (req, res) {
    burger.all(function (data) {

    })
})


module.exports = router;