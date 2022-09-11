var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url,function(err,db){
    if (err) throw err;
    var dbname = db.db("demodb");
    dbname.createCollection("students",function(err,result){
        if(err) throw err;
        console.log("collection created successfully");
        db.close();
    });
});