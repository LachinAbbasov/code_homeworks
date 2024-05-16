const mongoose = require("mongoose");
const orderItemSchema = require("../schemas/orderitem.schema");

const OrderItem = mongoose.model("OrderItem", orderItemSchema);

module.exports = OrderItem;
