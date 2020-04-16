let mongo = require('mongodb');
/* let me make a database */
let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/mydb";
MongoClient.connect(url, function(err,db){
    useUnifiedTopology:true;
    if(err) throw err;
    console.log('database was created by classychizzy');
    db.close();
})