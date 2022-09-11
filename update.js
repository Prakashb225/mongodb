var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url,function(err,db){
    if (err) throw err;
    var dbname = db.db("demodb");
    var myfield={city:'kanchipuram'};
    var newvalues={$set:{city:'chennai'}};
    dbname.collection("students").updateMany(myfield,newvalues,function(err,result){
        if (err) throw err;
        console.log("success");
        db.close();
    });
})
//