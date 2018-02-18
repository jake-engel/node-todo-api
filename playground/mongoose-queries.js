const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user')

const userID = '5a87c38fa7e6ee3e017e2c35';

// const id = '5a88f0f1e8c38156487f08d21112481fb21fb129b!!!';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({_id: id}).then((todos) => {
//   if (todos.length === 0) {
//     return console.log('Id not found');
//   }
//   console.log('Todos', todos);
// });

// Todo.findOne({_id: id}).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by ID', todo);
// }).catch((e) => {
//   console.log(e);
// });

User.findById(userID).then((user) => {
  if (!user) {
    return console.log('User not found');
  }

  console.log(JSON.stringify(user));
}).catch((e) => {
  console.log(e);
})
