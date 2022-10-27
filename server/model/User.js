const Mongoose = require("mongoose")
const UserSchema = new Mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
  role: {
    type: String,
    default: "Basic",
    required: true,
  },
  email: {
    type: String,
    default: "-",
    required: true,
  },
  professione: {
    type: String,
    default: "-",
    required: true,
  },
})

const User = Mongoose.model("user", UserSchema)
module.exports = User