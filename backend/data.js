/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://Ganesh:0lsyb94VlYdJYlNa@cluster0.qpo2eny.mongodb.net/FlashFoods?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
    const fetched_data = mongoose.connection.db.collection("menu");
    const data = await fetched_data.find({}).toArray();
    console.log("data fetched");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectDB;
