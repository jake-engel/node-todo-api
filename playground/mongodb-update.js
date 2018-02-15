// const MongoClient = require('mongodb').MongoClient; // Equivalent to below (minus the ObjectID part)
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a84db4623231a16614b8f49')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {returnOriginal: false}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({text: 'Eat lunch'}, {
    $set: {
      text: "Jake Engel"
    },
    $inc: {
      age: 1
    }
  }, {returnOriginal: false}).then((result) => {
    console.log(result);
  });

  client.close();
});
