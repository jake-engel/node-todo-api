// const MongoClient = require('mongodb').MongoClient; // Equivalent to below (minus the ObjectID part)
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  const db = client.db('TodoApp');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Hello World'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Walk the dog'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').deleteMany({name: 'Jake Engel'}).then((result) => {
    console.log(result);
  })

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("5a823bb7c1047baa2190b5ca")
  }).then((result) => {
    console.log(results);
  });

  client.close();
});
