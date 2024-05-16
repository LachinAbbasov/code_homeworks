const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String },
    password: { type: String },
    email: { type: String },
    profileImg: String,
    balance: { type: Number },
    role: { type: String },
    basketItems: { type: String }
  }, { timestamps: true });


  module.exports = userSchema;