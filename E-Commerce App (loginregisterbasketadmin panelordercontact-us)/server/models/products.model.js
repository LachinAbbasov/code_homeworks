const mongoose = require("mongoose");
const productSchema = require("../schemas/products.schema");


const Product = mongoose.model("Product", productSchema);


module.exports = Product;
