var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var UsersSchema = Schema({
  name: {
    type: String,
    default:'',
    unique:false,
  },
  email: { 
    type: String,
    require: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  phoneNumber: {
    type: Number,
    require: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    require: true,
    unique: true,
    trim: true,
  },
});
var UsersModel = mongoose.model("users", UsersSchema);
module.exports = UsersModel;
