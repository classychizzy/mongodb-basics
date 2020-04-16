let mongo= require('mongodb');
let MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/mydb";
MongoClient.connect(url, function(err, db) {
    
    if (err) throw err;
    var databaseObject = db.db("classychizzy_db");
    /*the array containing the documents i wish to return*/
    var myMovies =[ 
        {movie: "The Banker", year: "2020", rating: 8},
      {movie: "Bad Boys", year: "2020", rating: 7},
       {movie: "The Hunt", year: "2020", rating: 7},
        {movie: "Bloodshot", year: "2020", rating: 7.5}, 
    {movie: "First Cow", year: "2020", rating: 6.5} ];
    databaseObject.collection("interns").insertMany(myMovies, function(err, res) {
        if (err) throw err;
        console.log("number documents inserted: " + res.insertedCount);
        db.close();
      });
    });