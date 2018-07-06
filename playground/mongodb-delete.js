const {
  MongoClient,
  ObjectID
} = require("mongodb");

const url = "mongodb+srv://admin:admin@cluster0-y7mmr.mongodb.net/TodoApp";

MongoClient.connect(url, (error, client) => {
  if (error) {
    return console.log("Unable to connect", error);
  }
  console.log("Connection successful");
  const db = client.db("TodoApp");

  // db.collection("Users").deleteMany({
  //   name:"mike"
  // }).then((result)=>{
  //   console.log(result);
  // },(error)=>{
  //   console.log(error);
  // });

//   db.collection("Todos").deleteOne({text: "eat lunch"
// }).then((result) => {
//   console.log(result);
// }, (error) => {
//   console.log(error);
// });

  db.collection("Users").findOneAndDelete({
    _id: ObjectID("5b3c55f6cfcc8b0ef66d6663")
  }).then((result)=>{
    console.log(result);
  },(error)=>{
    console.log(error);
  });

client.close();
});
