const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 5059;
const cors = require("cors");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// User schema
const userSchema = new Schema({
  username: { type: String },
  password: { type: String },
  email: { type: String },
  profileImg: String,
  balance: { type: Number },
  role: { type: String },
  basketItems: { type: String }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

// CRUD operations for User

// Get all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send({ message: "success", data: users });
  } catch (err) {
    res.send({ message: "error", error: err });
  }
});

// Get user by ID
app.get("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (user) {
      res.status(200).send({ message: "success", data: user });
    } else {
      res.send({ message: "not found", data: null });
    }
  } catch (err) {
    res.send({ error: err });
  }
});

// Create new user
app.post("/api/users", async (req, res) => {
  try {
    const existUser = await User.findOne({ username: req.body.username });
    if (existUser) {
      res.send({ message: "this username is exist, please use another one" });
    } else {
      const user = new User(req.body);
      await user.save();
      res.status(201).send({ message: "posted", data: user });
    }
  } catch (err) {
    res.send({ error: err });
  }
});

// Delete user by ID
app.delete("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await User.findByIdAndDelete(id);
    res.status(200).send({ message: "deleted", response: response });
  } catch (err) {
    res.send({ error: err });
  }
});

// Update user by ID
app.patch("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).send({ message: "updated", response: response });
  } catch (err) {
    res.send({ error: err });
  }
});

// Message schema
const messageSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  title: { type: String, required: true },
  message: { type: String, required: true }
}, { timestamps: true });

const Message = mongoose.model("Message", messageSchema);

// CRUD operations for Message

// Get all messages
app.get("/api/messages", async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).send({ message: "success", data: messages });
  } catch (err) {
    res.send({ message: "error", error: err });
  }
});

// Get message by ID
app.get("/api/messages/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const message = await Message.findById(id);
    if (message) {
      res.status(200).send({ message: "success", data: message });
    } else {
      res.send({ message: "not found", data: null });
    }
  } catch (err) {
    res.send({ error: err });
  }
});

// Create new message
app.post("/api/messages", async (req, res) => {
  try {
    const message = new Message(req.body);
    await message.save();
    res.status(201).send({ message: "posted", data: message });
  } catch (err) {
    res.send({ error: err });
  }
});

// Delete message by ID
app.delete("/api/messages/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Message.findByIdAndDelete(id);
    res.status(200).send({ message: "deleted", response: response });
  } catch (err) {
    res.send({ error: err });
  }
});

// Update message by ID
app.patch("/api/messages/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Message.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).send({ message: "updated", response: response });
  } catch (err) {
    res.send({ error: err });
  }
});

// Order item schema
const orderItemSchema = new Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  count: { type: Number, required: true }
}, { timestamps: true });

const OrderItem = mongoose.model("OrderItem", orderItemSchema);

// Order schema
const orderSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  totalPrice: { type: Number, required: true },
  status: { type: String, default: "pending" },
  items: [orderItemSchema]
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);

// CRUD operations for Order

// Get all orders
app.get("/api/orders", async (req, res) => {
  try {
    const orders = await Order.find().populate("userId").populate("items.productId");
    res.status(200).send({ message: "success", data: orders });
  } catch (err) {
    res.send({ message: "error", error: err });
  }
});

// Get order by ID
app.get("/api/orders/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findById(id).populate("userId").populate("items.productId");
    if (order) {
      res.status(200).send({ message: "success", data: order });
    } else {
      res.send({ message: "not found", data: null });
    }
  } catch (err) {
    res.send({ error: err });
  }
});

// Create new order
app.post("/api/orders", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).send({ message: "posted", data: order });
  } catch (err) {
    res.send({ error: err });
  }
});

// Delete order by ID
app.delete("/api/orders/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Order.findByIdAndDelete(id);
    res.status(200).send({ message: "deleted", response: response });
  } catch (err) {
    res.send({ error: err });
  }
});

// Update order by ID
app.patch("/api/orders/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Order.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).send({ message: "updated", response: response });
  } catch (err) {
    res.send({ error: err });
  }
});

// Category schema
const categorySchema = new Schema({
  name: { type: String, required: true }
}, { timestamps: true });

const Category = mongoose.model("Category", categorySchema);

// CRUD operations for Category

// Get all categories
app.get("/api/categories", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).send({ message: "success", data: categories });
  } catch (err) {
    res.send({ message: "error", error: err });
  }
});

// Get category by ID
app.get("/api/categories/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findById(id);
    if (category) {
      res.status(200).send({ message: "success", data: category });
    } else {
      res.send({ message: "not found", data: null });
    }
  } catch (err) {
    res.send({ error: err });
  }
});

// Create new category
app.post("/api/categories", async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).send({ message: "posted", data: category });
  } catch (err) {
    res.send({ error: err });
  }
});

// Delete category by ID
app.delete("/api/categories/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Category.findByIdAndDelete(id);
    res.status(200).send({ message: "deleted", response: response });
  } catch (err) {
    res.send({ error: err });
  }
});

// Update category by ID
app.patch("/api/categories/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Category.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).send({ message: "updated", response: response });
  } catch (err) {
    res.send({ error: err });
  }
});

// Product schema
const productSchema = new Schema({
  name: { type: String, required: true },
  salePrice: { type: Number, required: true },
  costPrice: { type: Number, required: true },
  imgSrc: String,
  discountPercentage: { type: Number, default: 0 },
  description: String,
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  stockCount: { type: Number, required: true }
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);

// CRUD operations for Product

// Get all products
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find().populate("categoryId");
    res.status(200).send({ message: "success", data: products });
  } catch (err) {
    res.send({ message: "error", error: err });
  }
});

// Get product by ID
app.get("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id).populate("categoryId");
    if (product) {
      res.status(200).send({ message: "success", data: product });
    } else {
      res.send({ message: "not found", data: null });
    }
  } catch (err) {
    res.send({ error: err });
  }
});

// Create new product
app.post("/api/products", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send({ message: "posted", data: product });
  } catch (err) {
    res.send({ error: err });
  }
});

// Delete product by ID
app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Product.findByIdAndDelete(id);
    res.status(200).send({ message: "deleted", response: response });
  } catch (err) {
    res.end({ error: err });
  }
});

// Update product by ID
app.patch("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Product.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).send({ message: "updated", response: response });
  } catch (err) {
    res.send({ error: err });
  }
});

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://Lacin:lacin2002@cluster0.xvlbv2k.mongodb.net/")
  .then(() => console.log("Connected!"))
  .catch((err) => console.log("ERROR", err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
