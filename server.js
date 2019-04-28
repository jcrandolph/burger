var express = require("express");
var mysql = require("mysql");
var exphbs = require("express-handlebars");
var body = require("body-parser");
var methodOverride = require('method-override');

var PORT = process.env.PORT || 8080;

var app = express();
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var router = require("./controllers/burgers_controller");

app.use(router);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});