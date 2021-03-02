const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  passcode: {
    type: Number,
    required: true,
  },
});

UserSchema.plugin(uniqueValidator);

module.exports = User = mongoose.model("user", UserSchema);
