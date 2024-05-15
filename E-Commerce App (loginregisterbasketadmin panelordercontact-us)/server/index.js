const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 5059;
const cors = require("cors")
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//user
const userSchema = new Schema({
  username: {
    type: String,
  },
  password: {
    type: String,

  },
  email: {
    type: String,
  },
  profileImg: String,
  balance: {
    type: Number,
  },
  role: {
    type: String,
  },
  basketItems: {
    type: String //[mongoose.Schema.Types.ObjectId],
    
  },
 
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

//CRUDS user

//getall user
app.get("/api/users", async (req, res) => {
  const users = await User.find();
  if (users.length > 0) {
    res.status(200).send({
      message: "succes",
      data: users,
    });
  } else {
    res.send({
      message: "not connect",
      data: null,
    });
  }
});
//getall id
app.get("/api/users/:id", async (req, res) => {
  const { id } = res.params;
  let user;
  try {
    const users = await User.findById(id);
  } catch {
    res.send({ error: err });
  }
  if (user) {
    res.status(200).send({
      message: "success",
      data: user,
    });
  } else {
    res.send({
      message: "no content",
      data: null,
    });
  }
});

//post user
app.post("/api/users",async(req,res)=>{
    const user = await User(req.body);
    await user.save();
    res.send({
        message: "posted",
        data: user,
      });
});

//delete user
app.delete("/api/users/:id", async (req, res) => {
    const  id  = req.params.id;
    let response;
    try {
      response = await User.findByIdAndDelete(id);
    } catch (error) {
      res.send({
        error: error,
      });
    }
    res.send({
      message: "deleted",
      response: response,
    });
  });
//patch user
  app.patch("/api/users/:id", async (req, res) => {
    const { id } = req.params;
    const response = await User.findByIdAndUpdate(id, req.body);
    res.send({
      message: "updated",
      response: response,
    });
  });






//message
const messageSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Message = mongoose.model("Message", messageSchema);

//orderitem
const orderItemSchema = new Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});

const OrderItem = mongoose.model("OrderItem", orderItemSchema);

//order
const orderSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    default: "pending",
  },
  items: [orderItemSchema],
});

const Order = mongoose.model("Order", orderSchema);

//category
const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const Category = mongoose.model("Category", categorySchema);

//products
const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  salePrice: {
    type: Number,
    required: true,
  },
  costPrice: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  imgSrc: String,
  discountPercentage: {
    type: Number,
    default: 0,
  },
  description: String,
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  stockCount: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

mongoose
  .connect("mongodb+srv://Lacin:lacin2002@cluster0.xvlbv2k.mongodb.net/")
  .then(() => console.log("Connected!"))
  .catch((err) => {
    console.log("ERROR", err);
  });

app.listen(PORT, () => {
  console.log(`Port Listening... ${PORT}`);
});
