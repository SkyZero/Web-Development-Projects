//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js"); //accessing date.js file

const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.set('view engine', 'ejs'); //tell express to use ejs as view engine must be below app

app.use(bodyParser.urlencoded({
  extended: true
})); //to allow the program to take in post info
app.use(express.static("public"));

app.get("/", function(req, res) {

  const day = date.getDate();

  res.render("list", {
    listTitle: day,
    newListItems: items //ejs marker & can only render once
  }); //must have views folder with list.ejs
  res.sendFile(__dirname + "/weekday.html");
});

app.post("/", function(req, res) {

  const item = req.body.newItem;

  if (req.body.list === "Work") { //checks the req.body.list from the button to see if it's from the work webpage
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems
  });
});

app.post("/work", function(req, res) {
  let item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
