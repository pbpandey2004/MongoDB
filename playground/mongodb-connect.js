const MongoClient = require("mongodb").MongoClient;

const url = "mongodb+srv://admin:admin@cluster0-y7mmr.mongodb.net/TodoApp?retryWrites=true";

MongoClient.connect(url,(error,client)=>{
  if(error){
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  const db = client.db("TodoApp")

  db.collection("Users").insertOne({
    name:"neeraj gautam",
    age:28,
    location:"Seattle"
  },(error,result) => {
    if(error){
      return console.log("Unable to insert in Users collection due to ERROR: ",error);
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
  })

  client.close();
});
