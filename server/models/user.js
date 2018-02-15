const mongoose = require('mongoose');

const User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

module.exports = { User };

// const newUser = new User({email: '   jake.engel@nih.gov   '});

// newUser.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (err) => {
//   console.log(err);
// });
