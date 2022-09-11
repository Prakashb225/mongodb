var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url,function(err,db){
    if (err) throw err;
    var dbname = db.db("demodb");
    var muldata= [
        {name:'prakash',city:'kanchipuram'},
        {name:'gokul',city:'kanchipuram'},
        {name:'surender',city:'kanchipuram'},  
    ];
    dbname.collection("students").insertMany(muldata,function(err,result){
        if (err) throw err;
        console.log("Documents inserted successfully");
        db.close();
    });
});