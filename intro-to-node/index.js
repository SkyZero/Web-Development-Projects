//jshint esversion:6

//const fs = require("fs"); //fs = file system

//fs.copyFileSync("file1.txt", "file2.txt"); //copy file1 into file2(if file 2 doesn't exist create)

//initialize npm with: npm init
var superheroes = require("superheroes"); // in hyper: npm install superheroes(from npm) to use superheroes
var supervillains = require("supervillains");

var mySuperheroName = superheroes.random(); //in superhero npm functions
var mySupervillainsName = supervillains.random();

console.log(mySuperheroName + " verses " + mySupervillainsName);
