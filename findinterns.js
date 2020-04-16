var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
/* returns the first document only*/
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var databaseObject = db.db("classychizzy_db");
  databaseObject.collection("interns").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

/* lets use the find method to return movies with a rating of 7*/
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var databaseObject = db.db("classychizzy_db");
    var query={rating:7};
    databaseObject.collection("interns").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });
  /* use of projection method to select only movie titles*/
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var databaseObject = db.db("mydb");
    databaseObject.collection("interns").find({}, { projection: { _id: 0, movie: 1 } }).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });
