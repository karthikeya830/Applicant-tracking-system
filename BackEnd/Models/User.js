
const bcrypt = require('bcrypt')
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  pic:{
    type: String,
    default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_rRNO0Gp65eZia4sIIT-zlbwY6Rb81Mx0Jr0RO5CrAAKwXzsN&s"
  }
},
{
  timestamps : true
}
);

//we are hashing the password

module.exports = mongoose.model('user', userSchema);

