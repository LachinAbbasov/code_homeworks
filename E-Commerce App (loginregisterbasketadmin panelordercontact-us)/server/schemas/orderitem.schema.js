const mongoose = require("mongoose");


const orderItemSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    count: { type: Number, required: true }
  }, { timestamps: true });


  module.exports = orderItemSchema;