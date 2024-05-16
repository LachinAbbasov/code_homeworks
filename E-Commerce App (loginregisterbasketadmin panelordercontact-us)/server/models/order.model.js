const mongoose = require("mongoose");
const orderSchema = require("../schemas/order.schema")

const Order = mongoose.model("Order", orderSchema);

module.exports =Order;