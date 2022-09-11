var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/demodb";
MongoClient.connect(url,function(err,db){
    if (err) throw err;
    console.log("database created successfully");
    db.close();
})