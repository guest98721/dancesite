const mongoose = require('mongoose');
const user = new mongoose.Schema({
  name: {
    type: String
  },
  phone: {
    type: String
  },
  email: {
    type: String
  },
  address: {
    type: String
  },
  desc: {
    type: String
  }
});

module.exports = User = mongoose.model('user', user);

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/contactDance', {useNewUrlParser: true, useUnifiedTopology: true});


// const contactSchema = new mongoose.Schema({
//     name: String,
//     phone: String,
//     email: String,
//     address: String,
//     desc: String
// });

// const Contact = mongoose.model('Contact', contactSchema);