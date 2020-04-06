let MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/mydb";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("interns", function(err, res) {
      if (err) throw err;
      console.log(" interns Collection created!");
      db.close();
    });
  });