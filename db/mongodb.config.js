const mongoose = require("mongoose");
require("dotenv").config();

const mongodbConfig = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};

module.exports = { mongodbConfig };
