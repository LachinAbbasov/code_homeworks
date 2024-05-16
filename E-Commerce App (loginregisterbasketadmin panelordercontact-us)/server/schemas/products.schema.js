const mongoose = require("mongoose");




const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    salePrice: { type: Number, required: true },
    costPrice: { type: Number, required: true },
    imgSrc: String,
    discountPercentage: { type: Number, default: 0 },
    description: String,
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    stockCount: { type: Number, required: true }
  }, { timestamps: true });


  module.exports = productSchema;