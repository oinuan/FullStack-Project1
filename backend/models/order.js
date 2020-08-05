const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  date: { type: String, required: true },
  by: { type: String, required: true },
  amount: { type: Number, required: true },
  user: [{ type: mongoose.Types.ObjectId, required: true, ref: "User" }],
});

module.exports = mongoose.model("Order", orderSchema);
