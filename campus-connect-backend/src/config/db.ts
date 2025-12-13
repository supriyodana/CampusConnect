import mongoose from "mongoose";
import { config } from "./config";

export const connectDB = async () : Promise<void> => {
  try {
    // if(!config.mongoUri){
    //   throw new Error("MONGO_URI is not defined");
    // }
    await mongoose.connect(config.mongoUri);

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
