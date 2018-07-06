const {MongoClient, ObjectID} = require("mongodb");

const url = "mongodb+srv://admin:admin@cluster0-y7mmr.mongodb.net/TodoApp?retryWrites=true";

MongoClient.connect(url,(error,client)=>{
  if(error){
    return console.log("Unable to connect to mongodb");
  }
  console.log("Connected to MongoDB");

  const db = client.db("TodoApp");

  // db.collection("Todos").findOneAndUpdate({
  //   _id: new ObjectID("5b3fabf219a6d01332a1a744")
  // },{
  //   $set:{
  //     completed:true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result)=>{
  //   console.log(result);
  // });

  db.collection("Users").findOneAndUpdate({
    _id: new ObjectID("5b3c41cfd74ded0e0924332a")
  },{
    $set:{
      name:"jen"
    },
    $inc:{
      age:4
    }
  },{
    returnOriginal:false
  }).then((result)=>{
    console.log(result);
  });

  client.close();
});
