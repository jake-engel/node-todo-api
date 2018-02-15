const mongoose = require('mongoose');

const Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = { Todo };

// const newTodo = new Todo({
//   text: 'Cook Dinner'
// });

// const newTodo = new Todo({text: '   edit this video  '});

// newTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (err) => {
//   console.log(err);
// });
