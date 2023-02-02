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
  },
  price: { type: Number, required: true },
});

const Product = mongoose.model("Product", productSchema);

const bike = new Product({ name: "Mountain Bike", price: 999, color: "red" });

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