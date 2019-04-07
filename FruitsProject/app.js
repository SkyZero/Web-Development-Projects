//jshint esversion:6

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"]
  },
  rating: {
    type: Number, //restrictions on rating 1~10
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  rating: 10,
  review: "Peaches are so yummy."
});

//fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  score: 9,
  review: "Great fruit."
});

//pineapple.save();

const mango = new Fruit({
  name: "Mango",
  score: 10,
  review: "Best fruit."
});

const person = new Person({
  name: "Amy",
  age: 12,
  favouriteFruit: pineapple
});

//person.save(); //saves the new personSchema

//const kiwi = new Fruit({
//  name: "Kiwi",
//  score: 10,
//  review: "The best fruit!"
//});

//const orange = new Fruit({
//  name: "Orange",
//  score: 4,
//  review: "Too sour for me"
//});

//const banana = new Fruit({
//  name: "Banana",
//  score: 3,
//  review: "Weird texture"
//});

//Fruit.insertMany([kiwi, orange, banana], function(err){
//  if (err) {
//    console.log(err);
//  }else{
//    console.log("Successfully saved all the fruits to fruitsDB.");
//  }
//});

Fruit.find(function(err, fruits) {

  if (err) {
    console.log(err);
  } else {

mongoose.connection.close();

    fruits.forEach(function(fruit) { //logs each fruit name
      console.log(fruit.name);
    });
  }
});

//Fruit.updateOne({_id: "5ca98a3cee619d45b434dfe1"}, {name: "Peach"}, function(err){
//  if (err){
//    console.log(err);
//  }else{
//    console.log("Successfully updated the document.");
//  }
//});

Person.updateOne({_id: "5ca98f7c4a89704740b68d8e"}, {favouriteFruit: mango}, function(err){
  if (err){
    console.log(err);
  }else{
    console.log("Successfully updated the document.");
  }
});

//Fruit.deleteOne({_id: "5ca9888024a0d6421c5fd269"}, function(err){
//  if (err){
//    console.log(err);
//  }else{
//    console.log("Successfully deleted the document.");
//  }
//});

//Person.deleteMany({name: "John"}, function(err){
//  if (err){
//    console.log(err);
//  }else{
//    console.log("Successfully deleted many persons.");
//  }
//});
