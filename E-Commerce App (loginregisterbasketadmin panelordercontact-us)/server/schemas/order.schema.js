const mongoose = require("mongoose");
const orderItemSchema = require("../schemas/orderitem.schema");

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    totalPrice: { type: Number, required: true },
    status: { type: String, default: "pending" },
    items: [orderItemSchema]
  }, { timestamps: true });


  module.exports = orderSchema;