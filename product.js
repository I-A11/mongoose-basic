const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/shopApp")
  .then(() => {
    console.log("Connection open");
  })
  .catch((error) => {
    console.log("Connection error");
    console.log(error);
  });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
  },
  price: { type: Number, required: true, min: 0 },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: {
    type: [String],
  },
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
});

const Product = mongoose.model("Product", productSchema);

const bike = new Product({
  name: "Bike Helmet",
  price: 19.5,
  categories: ["Cycling", "Safety"],
});

bike
  .save()
  .then((data) => {
    console.log("It Worked!!");
    console.log(data);
  })
  .catch((err) => {
    console.log("No NO Oh");
    console.log(err);
  });
