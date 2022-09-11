var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url,function(err,db){
    if (err) throw err;
    var dbname = db.db("demodb");
    var deletevalues={name:'surender'};
    dbname.collection("students").deleteOne(deletevalues,function(err,result){
        if (err) throw err;
        console.log("success");
        db.close();
    });
});