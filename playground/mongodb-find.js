const {MongoClient, ObjectID} = require("mongodb");

const url = "mongodb+srv://admin:admin@cluster0-y7mmr.mongodb.net/TodoApp?retryWrites=true";

MongoClient.connect(url, (error,client) => {
  if(error){
    return console.log("Unable to connect to db");
  }

  console.log("Connection successful");

  const db = client.db("TodoApp");

  db.collection("Todos").find({
    _id: new ObjectID("5b3cffa6c6a06308e8614d93")
  }).toArray().then((docs)=>{
    console.log("Todos");
    console.log(JSON.stringify(docs,undefined,2));
  },(error)=>{
    console.log("unable to fetch documents",error);
  });

  var name="prashant pandey";

  db.collection("Users").find({
    name: name
  }).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
  },(error)=>{
    console.log(`unable to fetch ${name}`)
  });

  client.close();
});
