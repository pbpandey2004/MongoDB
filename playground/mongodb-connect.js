const MongoClient = require("mongodb").MongoClient;

const url = "mongodb+srv://admin:admin@cluster0-y7mmr.mongodb.net/TodoApp?retryWrites=true";

MongoClient.connect(url,(error,client)=>{
  if(error){
    return console.log("Unable to connect to MongoDB server",error);
  }
  console.log("Connected to MongoDB server");

  const db = client.db("TodoApp")

  // db.collection("Todos").insertOne({
  //   text:"eat lunch",
  //   completed: false
  // },(error,result) => {
  //   if(error){
  //     return console.log("Unable to insert in Users collection due to ERROR: ",error);
  //   }
  //   console.log(JSON.stringify(result,undefined,2));
  // });

  db.collection("Users").insertOne({
    name:"mike",
    age:25,
    location:"philadelphia"
  },(error,result)=>{
    if(error){
      return console.log("Unable to insert in Users collection due to ERROR: ",error);
    }
    console.log(JSON.stringify(result,undefined,2));
  });

  client.close();
});
