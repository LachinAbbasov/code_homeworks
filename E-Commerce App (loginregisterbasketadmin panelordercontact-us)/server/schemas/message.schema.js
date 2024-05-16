const mongoose = require("mongoose");


const messageSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    title: { type: String, required: true },
    message: { type: String, required: true }
  }, { timestamps: true });


module.exports = messageSchema;