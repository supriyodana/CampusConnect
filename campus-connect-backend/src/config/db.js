const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("      ")
    console.log("----------------------------");
    console.log("|  Connected to MongoDB    |");
    console.log("----------------------------");
    console.log("      ")
  } catch (error) {
    console.error("!!!!!!! MongoDB connection error:", error);
    process.exit(1);
  }
};




module.exports = connectDB;
