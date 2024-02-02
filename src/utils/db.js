import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (err) {
    throw new Error("Connection failed!");
  }
};

export default connectDB;
