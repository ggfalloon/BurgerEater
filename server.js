// Brings in express
var express = require("express");

// Establishes a port
var PORT = process.env.PORT || 3000;

// creates an iteration of express for the app
var app = express();

// Serves up content from the public folder
app.use(express.static("public"));

// Parses the body of the application as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Brings in handlebars templates for generating HTML
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Brings in routes for server access
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Starts server listiening at port for requests and logs when server has started
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});